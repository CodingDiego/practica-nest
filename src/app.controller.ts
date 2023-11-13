import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ItemsService } from './items/items.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private Items: ItemsService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('users')
  getUsers(): string[] {
    return this.appService.getUsers();
  }

  @Get('items')
  getItems(): string {
    return this.Items.findAll();
  }
}
