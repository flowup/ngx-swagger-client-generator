/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { MetaAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './meta-api-client.service';
import { GuardedMetaAPIClient } from './guarded-meta-api-client.service';

export { MetaAPIClient } from './meta-api-client.service';
export { MetaAPIClientInterface } from './meta-api-client.interface';
export { GuardedMetaAPIClient } from './guarded-meta-api-client.service';

@NgModule({})
export class MetaAPIClientModule {
  /**
   * Use this method in your root module to provide the MetaAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<MetaAPIClientModule> {
    return {
      ngModule: MetaAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: MetaAPIClient, useClass: GuardedMetaAPIClient }] : [MetaAPIClient]),
      ]
    };
  }
}
