import { AppDataSource } from "../data-source"
import { Post } from "../entity/Post"
import { User } from "../entity/User"
import log from "../logger";
const postRepo = AppDataSource.getRepository(Post);
const userRepo = AppDataSource.getRepository(User);

export async function findPostByBody(body) {

  const { username, title, content } = body
  let isTrue = false;

  const postUser = await userRepo.findOne({ where: { username: username }})

	const post = await postRepo.findOne({ where: {title: title, content: content } }).catch((err) => { console.log(err )})
  if(post){
    isTrue = true
  }
  return{
    postExist: isTrue == true,
  }
}


export async function findPostById(id) {
  let isTrue = false;
  const postRepo = AppDataSource.getRepository(Post);

  const post = await postRepo.findOne({id:id}).catch((err) => { console.log(err )})
  if(post){
    isTrue = true
  }
  return{
    post,
    postExist: isTrue == true,
  }
}


export async function addPost (body) {
  const { username, title, content } = body
  try{
    const postRepo = AppDataSource.getRepository(Post);
    const postUser = await userRepo.findOne({ where: { username: username }})

    const post = postRepo.create({ 
      user: username, 
      title: title,
      content: content 
    });
    await postRepo.save(postUser).catch((err) => {
      console.log('Error:', err)
    })
    return post
  }
  catch(err){
    log.error(err)
  }
}

export async function allPosts () {
  try{
    const postRepo = AppDataSource.getRepository(Post);
    const post = await postRepo.find({})
    return post
  }
  catch(err){
    log.error(err)
  }
}

export async function editPost(body, id) {

  const post = await AppDataSource.getRepository(Post).findOne({id}).catch((err) => { console.log(err) })
  AppDataSource.getRepository(Post).merge(post, body)
  const result = await AppDataSource.getRepository(Post).save(post);
  return result
}

export async function deletePostById(postID) {
  const post = await AppDataSource.getRepository(Post).delete(postID);
  return post
}