import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
  async handle(requerst: Request, response: Response) {
     const {name, email, admin} = requerst.body

     const createUserService = new CreateUserService()

     const user = await createUserService.execute({name, email, admin})

     return response.json(user)
  }
}