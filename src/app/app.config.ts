import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import myAppConfig from './config/my-app-config';
const oktaAuth = new OktaAuth(myAppConfig.oidc);

console.log('app.config OKTA_AUTH', OKTA_AUTH);
console.log('app.config oktaAuth', oktaAuth);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),    // Necessary for HttpClient
    OktaAuthStateService,
    { provide: OKTA_AUTH, useValue: oktaAuth },
  ]
};
