import { UserRepositories } from "../repositories/UserRepository";

interface IUserRequest {
  name: string
  email: string
  admin?: boolean
}

export class CreateUserService {
  async execute({name, email, admin} : IUserRequest) {
    const userRepositoy = new UserRepositories()

    if(!email) {
      throw new Error("Email incorrect.")
    }

    const userAlreadyExists = await userRepositoy.findOne({
      email
    })

    if(userAlreadyExists) {
      throw new Error("User already exists.")
    }

    const user = userRepositoy.create({name, email, admin})

    await userRepositoy.save(user)

    return user
  }
}