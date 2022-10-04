import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { Saml2Strategy } from './strategies/saml.strategy';

@Module({
  controllers: [AuthController],
  providers: [Saml2Strategy],
})
export class AuthModule {}
