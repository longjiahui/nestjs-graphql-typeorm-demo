import { Args, ID, Mutation, Query, Resolver } from '@nestjs/graphql'
import { User } from './interface/user'
import { Injectable } from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserInput } from './dto/create-user.input'

@Resolver(() => User)
@Injectable()
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User)
  user(@Args('id', { type: () => ID }) id: string) {
    return this.userService.findById(id)
  }

  @Mutation(() => User)
  save(
    @Args('createUserInput', { type: () => CreateUserInput })
    userInput: CreateUserInput,
  ) {
    return this.userService.save({
      id: (Math.random() + '').slice(2),
      createdAt: new Date(),
      updatedAt: new Date(),
      ...userInput,
    })
  }
}
