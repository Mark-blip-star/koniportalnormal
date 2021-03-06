import { Controller, Get, Req } from "@nestjs/common";
import { AppService } from "./app.service";
import { GetCurrentUser } from "./common/decorators/user.decorator";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@GetCurrentUser() currentUser): string {
    return this.appService.getHello(currentUser);
  }
}
