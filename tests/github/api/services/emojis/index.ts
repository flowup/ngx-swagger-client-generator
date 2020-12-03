/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { EmojisAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './emojis-api-client.service';
import { GuardedEmojisAPIClient } from './guarded-emojis-api-client.service';

export { EmojisAPIClient } from './emojis-api-client.service';
export { EmojisAPIClientInterface } from './emojis-api-client.interface';
export { GuardedEmojisAPIClient } from './guarded-emojis-api-client.service';

@NgModule({})
export class EmojisAPIClientModule {
  /**
   * Use this method in your root module to provide the EmojisAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<EmojisAPIClientModule> {
    return {
      ngModule: EmojisAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: EmojisAPIClient, useClass: GuardedEmojisAPIClient }] : [EmojisAPIClient]),
      ]
    };
  }
}
