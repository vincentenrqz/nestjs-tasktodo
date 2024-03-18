import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasktypesModule } from './tasktypes/tasktypes.module';
import { TaskTypesService } from './tasktypes/tasktypes.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_tasktypes'),
    TasktypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
