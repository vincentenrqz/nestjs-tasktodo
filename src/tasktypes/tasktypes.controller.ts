import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  NotFoundException,
  UsePipes,
  ValidationPipe,
  HttpException,
  Patch,
} from '@nestjs/common';
import { TaskTypesService } from './tasktypes.service';
import { CreateTaskTypeDto } from './dtos/create-tasktype.dto';
import mongoose from 'mongoose';
import { UpdateTaskTypeDto } from './dtos/update.tasktype.dto';

@Controller('tasktypes')
export class TasktypesController {
  constructor(public tasktypes: TaskTypesService) {}

  @Get()
  getAllTaskTypes() {
    return this.tasktypes.getAllTaskTypes();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createTaskType(@Body() createTaskTypeDto: CreateTaskTypeDto) {
    return this.tasktypes.createTaskType(createTaskTypeDto);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async updateTaskType(
    @Param('id') id: string,
    @Body() updateTaskTypeDto: UpdateTaskTypeDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('invalid id', 404);
    const updateUser = await this.tasktypes.updateTaskType(
      id,
      updateTaskTypeDto,
    );
    if (!updateUser) throw new HttpException('Task type not fouund', 404);

    return updateUser;
  }

  @Get('/:id')
  async findTaskType(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('invalid id', 404);
    const tasktype = await this.tasktypes.findTaskType(id);
    if (!tasktype) throw new HttpException('Task type not found', 404);
    return tasktype;
  }

  @Delete('/:id')
  async deleteTaskType(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('invalid id', 404);
    const isDeleted = await this.tasktypes.deleteTaskType(id);
    if (!isDeleted) throw new HttpException('Id not found', 404);
  }

  @Patch('/:id/assign-user/:userId')
  @UsePipes(new ValidationPipe())
  assignAgent(@Param('id') id: string, @Param('userId') userId: string) {
    const isValidId = mongoose.Types.ObjectId.isValid(id);
    const isValidUserId = mongoose.Types.ObjectId.isValid(userId);

    if (!isValidId && !isValidUserId)
      throw new HttpException('Invalid ID and Agent ID', 404);
    return this.tasktypes.assignAgent(id, userId);
  }
}
