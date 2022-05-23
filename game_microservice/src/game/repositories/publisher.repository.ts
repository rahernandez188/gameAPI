import { EntityRepository, Repository } from "typeorm";
import { Publisher } from "../entities/publisher.entity";
@EntityRepository(Publisher)
export class PublisherRepository extends Repository<Publisher> {

  async getPublisherById(publisherId: number){
    //console.log("publisherId:", publisherId)
    //console.log(this)
    let found = await this.findOne({
      where:{
        id: publisherId
      }
    });
    
    if(found === undefined) found = {
      id : 0,
      name : '',
      phone : '',
      siret: ''
    };
    return  found;
  }

  async insertPublisher(createPublisherDto){
    return await this.insert(createPublisherDto);
  }

  async updatePublisher(id: number, updatePublisherDto){
    return await this.update(id, updatePublisherDto);
  }  


  async deletePublisher(id: number){
    return await this.delete(id);
  }

}