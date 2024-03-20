import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateTaskTypeDto {
  @IsString()
  @IsNotEmpty()
  taskName: string;

  @IsString()
  @IsNotEmpty()
  status: string;

  // @IsString()
  // @IsOptional()
  // assignedBy: Date;
}
