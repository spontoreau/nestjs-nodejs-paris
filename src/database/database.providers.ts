import { createConnection } from 'typeorm';
import { Keys } from '../keys';

export const databaseProviders = [
  {
    provide: Keys.DatabaseConnection,
    useFactory: async () => await createConnection()
  },
];