import { Entity, ObjectIdColumn, ObjectID, Column, ManyToOne } from "typeorm"
import { User } from "./User"

@Entity({ name: 'posts'})
export class Post {
    @ObjectIdColumn()
    _id: ObjectID;

    @Column({ type: 'varchar', length: '80'})
    title: string

    @Column({ type: 'varchar', length: '300'})
    content: string

    @ManyToOne((type) => User, (user) => user.posts)
    user: Promise<User>;
}