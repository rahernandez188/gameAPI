import { EntityRepository, Repository, Between, LessThan } from "typeorm";
import { Game } from "../entities/game.entity";
@EntityRepository(Game)
export class GameRepository extends Repository<Game> {

  async getGameById(gameId: number){
    //console.log("gameId:", gameId)
    //console.log(this)
    let found = await this.findOne({
      where:{
        id: gameId
      }
    });
    
    if(found === undefined) found = {
      id : 0,
      title : '',
      price : 0,
      publisher: 0,
      tags : '',
      releaseDate : '0000-00-00 00:00:00'
    };

    //console.log("Game found:", found);
    return  found;
  }

  async insertGame(createGameDto){
    return await this.insert(createGameDto);
  }

  async updateGame(id: number, updateGameDto){
    //console.log("Update:", id, updateGameDto);
    return await this.update(id, updateGameDto);
  }  


  async deleteGame(id: number){
    return await this.delete(id);
  }

  async retireAndDiscount(){
    let currentDate18 = new Date();
    let currentDate12 = new Date();

    currentDate18.setMonth(currentDate18.getMonth() - 18);
    let formatcurrentDate18 = ''+ currentDate18.getFullYear() + '-' + (currentDate18.getMonth()+1) + '-' + currentDate18.getDate() + ' ' + currentDate18.getHours() + ':' + currentDate18.getMinutes() + ':' + currentDate18.getSeconds();

    currentDate12.setMonth(currentDate12.getMonth() - 12);
    let formatcurrentDate12 = ''+ currentDate12.getFullYear() + '-' + (currentDate12.getMonth()+1) + '-' + currentDate12.getDate() + ' ' + currentDate12.getHours() + ':' + currentDate12.getMinutes() + ':' + currentDate12.getSeconds();


    let resultDelete = await this.delete({
      releaseDate: LessThan(formatcurrentDate18)
    })

    let resultDiscount = await this.createQueryBuilder()
                                   .update("Game")
                                   .set({ price: () => "0.8 * price" })
                                   .where({
                                      releaseDate: Between(formatcurrentDate18, formatcurrentDate12)
                                   })
                                   .execute();

    return {resultDelete, resultDiscount}

  }

}