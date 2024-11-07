import { BadRequestException, Injectable } from '@nestjs/common';
import { createHash } from 'crypto';
import { JwtService } from '@nestjs/jwt';
//  md5 加密的工具
@Injectable()
export class SecretTool {
  getSecret(data: string) {
    return createHash('md5').update(data).digest('hex');
  }
}

// token 解密工具
@Injectable()
export class JwtDecrypTool {
  constructor(private readonly jwtService: JwtService) {}

  getDecryp(token: string) {
    let decodedToken: any;
    try {
      decodedToken = this.jwtService.verify(token);
    } catch {
      throw new BadRequestException('請先登入！');
    }
    if (!decodedToken) throw new BadRequestException('請先登入！');
    if (decodedToken.exp - decodedToken.iat <= 0) {
      throw new BadRequestException('登入已過期，請重新登入');
    }
    return decodedToken.id;
  }
}
