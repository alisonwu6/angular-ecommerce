declare module '@okta/okta-signin-widget' {
  interface OktaSignInConfig {
    baseUrl: string;
    clientId: string;
    redirectUri: string;
    logo?: string;
    authParams?: {
      pkce: boolean;
      issuer: string;
      scopes: string[];
    };
  }

  export default class OktaSignIn {
    constructor(config: OktaSignInConfig);
    renderEl(
      options: { el: string },
      success: (res: any) => void,
      error: (err: any) => void
    ): void;
    remove(): void;
  }
}
