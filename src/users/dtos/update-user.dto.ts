import { IsString, IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  firstName: string;

  @IsString()
  @IsNotEmpty()
  lastName: string;
}
