import {Request, Response, NextFunction} from "express"
import { verify } from "jsonwebtoken"

export function ensureAuthenticate (request: Request, response: Response, next: NextFunction) {

  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).end()
  }

  // token separado por um espaço, onde  o token que vai ser usado está na posição 1 do array
  const [, token] = authToken.split(" ")  // const token = authToken.split(" ")[1]

  try{
    const decode = verify(token ,"7bd76dbd34a2b1d523a96467dcc207ca")

  } catch(err) {
    return response.status(401).end()
  }

  return next
}