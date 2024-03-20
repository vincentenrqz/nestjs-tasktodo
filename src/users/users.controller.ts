import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  Param,
  Patch,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUsersDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import mongoose from 'mongoose';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Post()
  createUser(@Body() createUserDto: CreateUsersDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put('/:id')
  @UsePipes(new ValidationPipe())
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid id', 404);
    return await this.userService.updateUser(id, updateUserDto);
  }

  @Get('/:id')
  async getUserById(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid id', 404);
    return await this.userService.getUserById(id);
  }

  @Delete('/:id')
  async deleteUser(@Param('id') id: string) {
    const isValid = mongoose.Types.ObjectId.isValid(id);
    if (!isValid) throw new HttpException('Invalid ID', 404);
    return this.userService.deleteUser(id);
  }
}
