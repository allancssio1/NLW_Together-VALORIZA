import { EntityRepository, Repository } from "typeorm";
import { Tag } from "../entities/Tag";

@EntityRepository(Tag)
export class TagsRepositorie  extends Repository<Tag>{}