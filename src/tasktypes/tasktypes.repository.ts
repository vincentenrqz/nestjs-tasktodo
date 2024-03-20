import { readFile, writeFile } from 'fs/promises';
import { CreateTaskTypeDto } from './dtos/create-tasktype.dto';
import { UpdateTaskTypeDto } from './dtos/update.tasktype.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { TaskType } from './schemas/tasktype.schema';
import { Model } from 'mongoose';

@Injectable()
export class TaskTypesRepository {
  constructor(
    @InjectModel(TaskType.name) private taskTypeModel: Model<TaskType>,
  ) {}

  async getAllTaskTypes() {
    return await this.taskTypeModel.find().populate('assignedBy');
  }

  async createTaskType(createTaskTypeDto: CreateTaskTypeDto) {
    const taskType = new this.taskTypeModel(createTaskTypeDto);
    return taskType.save();
  }

  async updateTaskType(id: string, updateTaskTypeDto: UpdateTaskTypeDto) {
    return await this.taskTypeModel.findByIdAndUpdate(id, updateTaskTypeDto);
  }

  async findTaskType(id: string) {
    return await this.taskTypeModel.findById(id);
  }

  async deleteTaskType(id: string) {
    return await this.taskTypeModel.findByIdAndDelete(id);
  }

  async assignAgent(id: string, userId: string) {
    return await this.taskTypeModel.findByIdAndUpdate(
      id,
      { assignedBy: userId },
      { new: true },
    );
  }
}
