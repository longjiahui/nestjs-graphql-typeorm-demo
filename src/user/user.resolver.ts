import { Args, ID, Query, Resolver } from '@nestjs/graphql'
import { User } from './interface/user'

@Resolver(() => User)
export class UserResolver {
  @Query(() => User)
  user(@Args('id', { type: () => ID }) id: string) {
    const user = new User()
    user.id = id
    user.name = 'hello world'
    return user
  }
}
