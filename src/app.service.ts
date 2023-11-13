import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getUsers(): string[] {
    return ['jeremias', 'negro', 'jerusalen'];
  }
  getItems(): string {
    return 'items work';
  }
}
