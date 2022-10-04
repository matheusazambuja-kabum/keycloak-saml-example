import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth/sso')
export class AuthController {
  public userData: any;

  @Get('saml')
  @UseGuards(AuthGuard('saml'))
  samlLogin() {
    return {};
  }

  @Post('callback')
  @UseGuards(AuthGuard('saml'))
  async callback(@Request() req, @Body() body: any) {
    return {
      isLogged: req.isAuthenticated(),
      user: req.user,
      body,
    };
  }
}
