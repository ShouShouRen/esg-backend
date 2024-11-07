import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty({ message: 'username限制不為空!' })
  @IsString({ message: 'username限制為字串' })
  username: string;
  @IsNotEmpty({ message: 'email限制不為空!' })
  @IsEmail({}, { message: 'email格式不正確' })
  email: string;

  @IsNotEmpty({ message: 'password限制不為空!' })
  @IsString({ message: 'password限制為字串' })
  password: string;
}
