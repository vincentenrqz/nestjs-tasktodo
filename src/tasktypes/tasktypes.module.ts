import { Module } from '@nestjs/common';
import { TasktypesController } from './tasktypes.controller';
import { TaskTypesService } from './tasktypes.service';
import { TaskTypesRepository } from './tasktypes.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskType, TaskTypeSchema } from './schemas/tasktype.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: TaskType.name,
        schema: TaskTypeSchema,
      },
    ]),
  ],
  controllers: [TasktypesController],
  providers: [TaskTypesService, TaskTypesRepository],
})
export class TasktypesModule {}
