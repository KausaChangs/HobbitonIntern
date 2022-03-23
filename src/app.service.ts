import { Injectable, NotFoundException } from '@nestjs/common';

import { HobbitonIntern } from './posts/create-intern';

@Injectable()
export class AppService {
  listOfInterns: HobbitonIntern[] = [];

  getHello(): string {
    return 'Hello World!';
  }

  addIntern(intern: HobbitonIntern): HobbitonIntern {
    this.listOfInterns.push(intern);
    return intern;
  }

  getAllInterns(): HobbitonIntern[] {
    return this.listOfInterns;
  }

  // getSingleIntern(id: number): HobbitonIntern {
  //   const intern: HobbitonIntern = this.listOfInterns.find( x => x.id === id );
  //   if (!intern) {
  //     throw new NotFoundException('Could not find Intern.');
  //   }
  //   return intern //{ ...intern };
  // // }
  //
  updateIntern(id: number,{...intern}): HobbitonIntern {
   let prevIntern: HobbitonIntern = this.listOfInterns.find((x) => x.id == id);
   prevIntern = {...prevIntern, ...intern}
   this.listOfInterns[this.listOfInterns.indexOf(prevIntern)] = prevIntern;

    return prevIntern;
   }


  // getInternById(id: number): HobbitonIntern{

  //   return this.listOfInterns.find(x => x.id == id);
  // }
  
}
