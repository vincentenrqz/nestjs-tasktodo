import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskTypeDto {
  @IsString()
  @IsNotEmpty()
  taskName: string;

  @IsString()
  @IsOptional()
  status: string;

  @IsString()
  completedAt?: Date;
}
