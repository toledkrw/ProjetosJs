import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  private users: User[] = [];

  createUser(user: User): User {
    this.users.push(user);
    return user;
  }

  findAll(): User[] {
    return this.users;
  }
}
