import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return {
      message: 'Hello World!',
      randomNumber: Math.floor(Math.random() * 100),
    };
  }
}
