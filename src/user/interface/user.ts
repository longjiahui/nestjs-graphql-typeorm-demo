import { Field, HideField, ID, ObjectType } from '@nestjs/graphql'
import { Column, Entity, PrimaryColumn } from 'typeorm'

@ObjectType()
@Entity()
export class User {
  @Field(() => ID)
  @PrimaryColumn()
  id: string

  @Field(() => String)
  @Column()
  email: string

  @HideField()
  @Field(() => String, { nullable: true })
  @Column()
  password?: string

  @Field(() => String, { nullable: true })
  @Column()
  name?: string

  @Field(() => Date)
  @Column()
  createdAt: Date

  @Field(() => Date)
  @Column()
  updatedAt: Date
}
