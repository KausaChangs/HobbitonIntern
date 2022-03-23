import { Controller, Get, Post, Body, Param, Patch } from '@nestjs/common';
import { AppService } from './app.service';
import { HobbitonIntern } from './posts/create-intern';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAllInterns(): HobbitonIntern[] {
    return this.appService.listOfInterns;
  }

  @Post()
  create(@Body() hobbitonIntern: HobbitonIntern): HobbitonIntern {
    return this.appService.addIntern(hobbitonIntern);
  }

  @Get(':id')
  getIntern(@Param('id') id: number) {}

  
  @Patch(':id')
  updateIntern(
    @Param('id') id: number,
    @Body() {...listOfInterns},
  ): HobbitonIntern {
    return this.appService.updateIntern(id, listOfInterns);
  }
  
}
