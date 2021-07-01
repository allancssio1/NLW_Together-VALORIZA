import { Request, Response } from "express";
import { ListUserReceiveComplimentsService } from "../services/ListUserReceiveComplimentsService";


export class ListUserReceiveComplimentController {
  async handle (request: Request, response: Response) {
    const {user_id} = request

    const listUserReceiveComplimentService = new ListUserReceiveComplimentsService

    const compliment = await listUserReceiveComplimentService.execute(user_id)

    return response.json(compliment)
  }
}