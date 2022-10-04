import { Controller, Get } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  helloWorld(): any {
    return {
      hello: 'world',
    };
  }
}
