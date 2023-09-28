import { Controller, Get } from '@nestjs/common';
import { AppService, Weather } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello(): Promise<Weather> {
    return await this.appService.getHello();
  }
}
