import { Body, Controller, Get, Post } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  @Post()
  create(@Body() user: User): User {
    return this.UsersService.createUser(user);
  }

  @Get()
  index(): User[] {
    return this.UsersService.findAll();
  }
}
