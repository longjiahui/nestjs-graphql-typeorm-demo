import { Controller, Get, Injectable, Param, Query } from '@nestjs/common'
import { UserService } from './user.service'

@Injectable()
@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get('/user/save')
  save(@Query('email') email: string) {
    this.userService.save({
      email,
      id: (Math.random() + '').slice(2),
      createdAt: new Date(),
      updatedAt: new Date(),
    })
  }

  @Get('/user/:id')
  get(@Param('id') id: string) {
    return this.userService.findById(id)
  }
}
