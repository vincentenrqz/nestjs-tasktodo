import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TaskTypeDocument = TaskType & Document;

@Schema()
export class TaskType {
  @Prop({ required: true })
  taskName: string;

  @Prop({ required: false })
  status: string;

  @Prop({ required: false })
  completedAt?: string;
}

export const TaskTypeSchema = SchemaFactory.createForClass(TaskType);
