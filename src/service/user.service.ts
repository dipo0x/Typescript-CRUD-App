import log from "../logger";
import { Request } from "express";
import { AppDataSource } from "../data-source"
import { getRepository } from "typeorm"
import { User } from "../entity/User"
import { findUser, addUser } from '../repositories/user.repository'

export async function createUser(body) {
	const { userExist } = await findUser(body)
    if(userExist == true){
    	throw new Error("Email exists");
    }
    else{
    	const user = await addUser(body)
    	return user
    }
}