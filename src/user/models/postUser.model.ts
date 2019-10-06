import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class PostUserModel {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;
}