import { AppDataSource } from "../data-source"
import { Post } from "../entity/Post"
import { User } from "../entity/User"
import log from "../logger";
const postRepo = AppDataSource.getRepository(Post);
const userRepo = AppDataSource.getRepository(User);

export async function findPost(body) {

  const { username, title, content } = body
  let isTrue = false;

  const postUser = await userRepo.findOne({ where: { username: username } 

	const post = await postRepo.findOne({ where: { user: postUser, title: title, content: content } }).catch((err) => { console.log(err )})
  if(post){
    isTrue = true
  }
  return{
    postExist: isTrue == true,
  }
}

export async function addPost (body) {
  const { username, title, content } = body
  try{
    const postRepo = AppDataSource.getRepository(Post);
    const postUser = await userRepo.findOne({ where: { username: username }

    const post = postCreate.create({ 
      user: username, 
      title: title,
      content: content 
    });
    await postRepo.save(user).catch((err) => {
      console.log('Error:', err)
    })
    return post
  }
  catch(err){
    log.error(err)
  }
}