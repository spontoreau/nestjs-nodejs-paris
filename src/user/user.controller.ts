import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';
import { PostUserModel } from './models/postUser.model';
import { PutUserModel } from './models/putUser.model';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post()
  async post(@Body() user: PostUserModel): Promise<void> {
    return await this.userService.create({ id: null, ...user});
  }

  @Put(':id')
  async update(@Param()id: number, @Body() user: PutUserModel): Promise<void> {
    return await this.userService.update(id, { id, ...user});
  }

  @Delete(':id')
  async delete(@Param()id: number): Promise<void> {
    return await this.userService.delete(id);
  }
}
