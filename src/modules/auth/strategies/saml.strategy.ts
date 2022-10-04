import 'passport';
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-saml';
import * as fs from 'fs';

// IDP PUBLIC Certificate
// LOCATED AT:
// -----------> Keycloak Admin > Realm Settings > Keys
// TYPE: RSA
// Algorithm: RS256
const publicRsaRS256Certificate = fs.readFileSync(
  process.cwd() + '/src/certificate/public-keycloak-idp.pem',
  'utf-8',
);

@Injectable()
export class Saml2Strategy extends PassportStrategy(Strategy, 'saml') {
  constructor() {
    super(
      {
        entryPoint: process.env.SAML_ENTRY_POINT,
        issuer: process.env.SAML_ISSUER,
        callbackUrl: process.env.SAML_CALLBACK_URL,
        disableRequestedAuthnContext: true,
        cert: [publicRsaRS256Certificate, publicRsaRS256Certificate],
      },
      function (profile, done: any) {
        console.log('profile', profile);
        return done(null, profile);
      },
    );
  }

  validate(profile) {
    // handle user validation
    return profile;
  }
}
