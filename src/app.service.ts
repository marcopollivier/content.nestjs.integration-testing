import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';

export class WeatherData {
  temperature: number;
  wind_direction: string;
  wind_velocity: number;
  humidity: number;
  condition: string;
  pressure: number;
  icon: string;
  sensation: number;
  date: Date;
}

export class Weather {
  id: number;
  name: string;
  state: string;
  country: string;
  data: WeatherData;
}

@Injectable()
export class AppService {
  constructor(private httpService: HttpService) {}

  async getHello(): Promise<Weather> {
    const yourAppToken = process.env.CLIMATEMPO_TOKEN;
    const url = `http://apiadvisor.climatempo.com.br/api/v1/weather/locale/3477/current?token=${yourAppToken}`;

    const queryResult = await this.httpService.get(url).toPromise();

    return queryResult.data;
  }
}
