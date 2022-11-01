import { AppDataSource } from "../data-source"
import { User } from "../entity/User"
import log from "../logger";
const userRepo = AppDataSource.getRepository(User);

export async function findUser (body) {
  const { username } = body
  let isTrue = false;
  let userID;
	const user = await userRepo.findOne({ where: { username: username } }).catch((err) => { console.log(err )})
  if(user){
    isTrue = true
  }
  return{
    userID,
    userExist: isTrue == true,
  }
}

export async function addUser (body) {
  const { username, password } = body
  try{
    const userRepo = AppDataSource.getRepository(User);
    const user = userRepo.create({ 
      username: username, 
      password: password, 
    });
    await userRepo.save(user).catch((err) => {
      console.log('Error:', err)
    })
    console.log("New User Saved", user);
  }
  catch(err){
    log.error(err)
  }
}