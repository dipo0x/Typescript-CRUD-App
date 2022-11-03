import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from "typeorm"
import { Post } from "./Post"

@Entity({ name: 'users'})
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    username: string;

    @Column()
    password: string;

    @OneToMany((type) => Post, (post) => post.user)
    posts: Promise<Post[]>;
    
}
