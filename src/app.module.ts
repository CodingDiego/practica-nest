import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { ItemsService } from './items/items.service';

@Module({
  imports: [ItemsModule],
  controllers: [AppController],
  providers: [AppService, ItemsService],
})
export class AppModule {}
