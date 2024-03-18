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

  async tasktypes() {
    const contents = await readFile('tasktypes.json', 'utf8');
    const tasktypes = JSON.parse(contents);

    return tasktypes;
  }

  async getAllTaskTypes() {
    return await this.taskTypeModel.find();
    // const tasktypes = await this.tasktypes();
    // return tasktypes;
  }

  async createTaskType(createTaskTypeDto: CreateTaskTypeDto) {
    const taskType = new this.taskTypeModel(createTaskTypeDto);
    return taskType.save();

    // const tasktypes = await this.tasktypes();
    // const id = Math.floor(Math.random() * 999);
    // tasktypes[id] = { id, name: request.taskName, status: request.status };

    // await writeFile('tasktypes.json', JSON.stringify(tasktypes));
  }

  async updateTaskType(id: string, updateTaskTypeDto: UpdateTaskTypeDto) {
    return await this.taskTypeModel.findByIdAndUpdate(id, updateTaskTypeDto);
    // const tasktype = await this.tasktypes();
    // tasktype[id].name = request.name;
    // tasktype[id].status = request.status;
    // await writeFile('tasktypes.json', JSON.stringify(tasktype, null, 2));
  }

  async findTaskType(id: string) {
    return await this.taskTypeModel.findById(id);
    // const tasktype = await this.tasktypes();
    // return tasktype[id];
  }

  async deleteTaskType(id: string) {
    return await this.taskTypeModel.findByIdAndDelete(id);
    // const tasktype = await this.tasktypes();
    // delete tasktype[id];
    // await writeFile('tasktypes.json', JSON.stringify(tasktype, null, 2));
  }
}
