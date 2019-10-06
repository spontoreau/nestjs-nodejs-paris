import { Connection, Repository } from 'typeorm';
import { User } from './user.entity';
import { Keys } from '../keys';

export const userProviders = [
  {
    provide: Keys.UserRepository,
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: [Keys.DatabaseConnection],
  },
];