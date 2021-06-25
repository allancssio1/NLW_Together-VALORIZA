import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UserRepositories } from "../repositories/UserRepository";

interface IAuthencateRequest {
  email: string
  password: string
}

export class AuthencateUserService {
  async execute({email, password}: IAuthencateRequest){
    const userRepositories = getCustomRepository(UserRepositories)

    const user = await userRepositories.findOne({email})

    if(!user) {
      throw new Error("Email/Password incorrect")
    }

    const passwordMatch = await compare(password, user.password)

    if(!passwordMatch) {
      throw new Error("Email/Password incorrect")
    }

    const token = sign(
      {email: user.email},
      "7bd76dbd34a2b1d523a96467dcc207ca",
      {
        subject: user.id,
        expiresIn: "1d"
      }
    )
    
    return token
  }
}