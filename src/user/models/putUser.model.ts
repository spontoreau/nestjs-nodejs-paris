import { IsString, IsEmail, IsNotEmpty } from 'class-validator';

export class PutUserModel {
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