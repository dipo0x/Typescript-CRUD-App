import { Entity, ObjectIdColumn, ObjectID, Column, OneToMany } from "typeorm"

@Entity({ name: 'users'})
export class User {

    @ObjectIdColumn()
    _id: ObjectID;

    @Column()
    username: string;

    @Column()
    password: string;
}
