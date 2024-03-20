import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTaskTypeDto {
  @IsString()
  @IsNotEmpty()
  taskName: string;

  @IsString()
  @IsOptional()
  status: string;

  // @IsString()
  // @IsOptional()
  // assignedBy?: string;
}
