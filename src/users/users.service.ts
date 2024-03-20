import { Injectable } from '@nestjs/common';
import { UsersRepository } from './users.repository';
import { CreateUsersDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(private userRepo: UsersRepository) {}

  getUsers() {
    return this.userRepo.getUsers();
  }

  createUser(createUserDto: CreateUsersDto) {
    return this.userRepo.createUser(createUserDto);
  }

  updateUser(id, updateUserDto: UpdateUserDto) {
    return this.userRepo.updateUser(id, updateUserDto);
  }

  getUserById(id) {
    return this.userRepo.getUserById(id);
  }

  deleteUser(id) {
    return this.userRepo.deleteUser(id);
  }
}
