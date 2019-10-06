import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { Keys } from '../keys';

@Injectable()
export class UserService {
  constructor(
    @Inject(Keys.UserRepository)
    private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async create(user: User): Promise<void> {
    await this.userRepository.save(user);
  }

  async update(id: number, user: User): Promise<void> {
    const { email, firstName, lastName } = user;

    await this.userRepository.update(id, {
      email,
      firstName,
      lastName
    });
  }

  async delete(id: number) {
    await this.userRepository.delete(id);
  }
}