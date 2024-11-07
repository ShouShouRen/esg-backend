import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from './dto/register-user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('register')
  register(@Body() dto: RegisterUserDto) {
    return this.userService.register(dto);
  }

  @Post('login')
  login(@Body() req) {
    return this.userService.login(req);
  }
}
