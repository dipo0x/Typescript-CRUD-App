import log from "../logger";
import { Request } from "express";
import { AppDataSource } from "../data-source"
import { getRepository } from "typeorm"
import { Post } from "../entity/Post"
import { findPostByBody, findPostById, addPost, allPosts, editPost } from '../repositories/post.repository'

export async function createPost(body) {
	const { postExist } = await findPost(body)
    if(postExist == true){
    	throw new Error("You have posted this already");
    }
    else{
    	const post = await addPost(body)
    	return post
    }
}

export async function allPost() {
	const post = await allPosts()
    return post
}

export async function editPost(body, params) {
    const postId = params.id
    const { postExist } = await findPostById(postID)
    if(postExist == true){
        const post = await editPost(body, postId)   
    }
    else{
        throw new Error("Post does not exist");
    }
}

export async function getPost(postId) {
    const { postExist } = await findPostById(postId)
    if(postExist == true){
        const { post } = await findPostById(postId)  
        return post 
    }
    else{
        throw new Error("Post does not exist");
    }
}