import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { User } from 'src/users/schemas/users.schema';

export type TaskTypeDocument = TaskType & Document;

@Schema({ timestamps: true })
export class TaskType {
  @Prop({ required: true })
  taskName: string;

  @Prop({ required: false })
  status: string;

  @Prop({ required: false })
  completedAt?: string;

  @Prop({
    required: false,
    type: mongoose.Schema.Types.ObjectId,
    ref: User.name,
  })
  assignedBy: User;
}

export const TaskTypeSchema = SchemaFactory.createForClass(TaskType);
