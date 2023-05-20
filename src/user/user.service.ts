import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from './interface/user'
import { Repository } from 'typeorm'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  findById(id: string): Promise<User | null> {
    return this.repository.findOneBy({ id })
  }

  save(user: User) {
    return this.repository.save(user)
  }
}
