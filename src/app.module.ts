import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TasktypesModule } from './tasktypes/tasktypes.module';
import { TaskTypesService } from './tasktypes/tasktypes.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_tasktypes'),
    TasktypesModule,
    UsersModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
