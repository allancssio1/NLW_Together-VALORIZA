import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";


export class CreateUserController {
  async handle(requerst: Request, response: Response) {
     const {name, email, admin, password} = requerst.body

     const createUserService = new CreateUserService()

     const user = await createUserService.execute({name, email, admin, password})

     return response.json(user)
  }
}