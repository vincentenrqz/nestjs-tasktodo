import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUsersDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;
  @IsString()
  @IsNotEmpty()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;
}
