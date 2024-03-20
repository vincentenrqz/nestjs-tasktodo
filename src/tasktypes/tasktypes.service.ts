import { InjectModel } from '@nestjs/mongoose';
import { CreateTaskTypeDto } from './dtos/create-tasktype.dto';
import { UpdateTaskTypeDto } from './dtos/update.tasktype.dto';
import { TaskTypesRepository } from './tasktypes.repository';
import { Injectable } from '@nestjs/common';
import { TaskType, TaskTypeDocument } from './schemas/tasktype.schema';

@Injectable()
export class TaskTypesService {
  constructor(public tasktypes: TaskTypesRepository) {}

  getAllTaskTypes() {
    return this.tasktypes.getAllTaskTypes();
  }

  createTaskType(createTaskTypeDto: CreateTaskTypeDto) {
    return this.tasktypes.createTaskType(createTaskTypeDto);
  }
  updateTaskType(id, updateTaskTypeDto: UpdateTaskTypeDto) {
    return this.tasktypes.updateTaskType(id, updateTaskTypeDto);
  }

  findTaskType(id: string) {
    return this.tasktypes.findTaskType(id);
  }

  deleteTaskType(id: string) {
    return this.tasktypes.deleteTaskType(id);
  }

  // Task and user relations
  assignAgent(id: string, userId: string) {
    return this.tasktypes.assignAgent(id, userId);
  }
}
