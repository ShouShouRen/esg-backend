import { SecretTool } from '@/common';
import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly secretTool: SecretTool,
    private readonly jwtService: JwtService,
  ) {}
  async register({ username, email, password }: RegisterUserDto) {
    // 檢查使用者名稱是否存在
    const foundUser = await this.userRepository.findOneBy({ username });
    if (foundUser) {
      throw new BadRequestException('使用者已存在！');
    }

    // 檢查 email 是否已存在（使用精確匹配）
    const foundEmail = await this.userRepository
      .createQueryBuilder('user')
      .where('BINARY user.email = BINARY :email', { email })
      .getOne();

    if (foundEmail) {
      throw new BadRequestException('此 Email 已被註冊！');
    }

    const user = await this.userRepository.save({
      username,
      email, // 儲存原始 email，保留大小寫
      password: this.secretTool.getSecret(password),
    });

    return {
      message: '註冊成功',
      data: this.jwtService.sign({ id: user.id }),
    };
  }

  async login({ email, password }) {
    // 使用精確匹配來查找用戶
    const foundUser = await this.userRepository
      .createQueryBuilder('user')
      .where('BINARY user.email = BINARY :email', { email })
      .getOne();

    if (!foundUser) {
      throw new BadRequestException('帳號或密碼錯誤');
    }

    const isPasswordValid =
      this.secretTool.getSecret(password) === foundUser.password;
    if (!isPasswordValid) {
      throw new BadRequestException('帳號或密碼錯誤');
    }

    return {
      data: this.jwtService.sign({ id: foundUser.id }),
      message: '登入成功',
    };
  }
}
