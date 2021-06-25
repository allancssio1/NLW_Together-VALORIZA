import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepository";

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
  password: string
}

export class CreateUserService {
  async execute({name, email, admin, password} : IUserRequest) {
    const userRepositoy = getCustomRepository(UserRepositories)
    
    if(!email) {
      throw new Error("Email incorrect.")
    }
        
    const userAlreadyExists = await userRepositoy.findOne({
      email
    })
    
    if(userAlreadyExists) {
      throw new Error("User already exists.")
    }

    const passwordHash = await hash(password, 8)

    const user = userRepositoy.create({name, email, admin, password: passwordHash})

    await userRepositoy.save(user)

    return user
  }
}