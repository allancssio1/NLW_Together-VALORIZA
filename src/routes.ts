import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateComplimentController } from "./controllers/CreateComplimenrtController";
import { CreateTagController } from "./controllers/CreateTagConstroller";
import { CreateUserController } from "./controllers/CreateUserController";
import { ListUserReceiveComplimentController } from "./controllers/ListUserReceiveComplimentsController";
import { ListUserSendComplimentsController } from "./controllers/ListUserSendComplimentsController";
import { ensureAdmin } from "./middlewares/ensureAdmin";
import { ensureAuthenticate } from "./middlewares/ensureAuthenticate";

const router = Router()
const createUserController = new CreateUserController()
const createTagController = new CreateTagController()
const authenticateUserController = new AuthenticateUserController()
const createComplimentController = new CreateComplimentController()
const listUserSendComplimentsController = new ListUserSendComplimentsController()
const listUserReceiveComplimentsController = new ListUserReceiveComplimentController()

router.post("/users", createUserController.handle)
router.post("/tags",ensureAuthenticate , ensureAdmin, createTagController.handle)
router.post("/login", authenticateUserController.handle)
router.post("/compliments", ensureAuthenticate, createComplimentController.handle)

router.get('/users/compliments/send', listUserSendComplimentsController.handle)
router.get('/users/compliments/receive', listUserReceiveComplimentsController.handle)

export {router}