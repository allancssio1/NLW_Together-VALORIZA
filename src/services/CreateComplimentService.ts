import { getCustomRepository } from "typeorm";
import { ComplimentsRepositories } from "../repositories/ComplimentsRepository";
import { UserRepositories } from "../repositories/UserRepository";


interface IComplimentRequest {
  tag_id: string
  user_sender: string
  user_receiver: string
  message: string
}

export class CreateComplimentService {
  async execute ({message, user_receiver, user_sender, tag_id}: IComplimentRequest) {
    const complimentRepositories = getCustomRepository(ComplimentsRepositories)
    const userRepositories = getCustomRepository(UserRepositories)

    if (user_sender == user_receiver) {
      throw new Error("Incorrect user receiver")
    }

    const userReceiverExists = await userRepositories.findOne(user_receiver)
    
    if(!userReceiverExists) {
      throw new Error("User receiver does not exists")
    }

    const compliment = complimentRepositories.create({
      tag_id,
      user_sender,
      user_receiver,
      message
    })

    await complimentRepositories.save(compliment)

    return compliment
  }
}