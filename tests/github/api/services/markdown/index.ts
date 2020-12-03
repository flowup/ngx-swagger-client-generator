/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { MarkdownAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './markdown-api-client.service';
import { GuardedMarkdownAPIClient } from './guarded-markdown-api-client.service';

export { MarkdownAPIClient } from './markdown-api-client.service';
export { MarkdownAPIClientInterface } from './markdown-api-client.interface';
export { GuardedMarkdownAPIClient } from './guarded-markdown-api-client.service';

@NgModule({})
export class MarkdownAPIClientModule {
  /**
   * Use this method in your root module to provide the MarkdownAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<MarkdownAPIClientModule> {
    return {
      ngModule: MarkdownAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: MarkdownAPIClient, useClass: GuardedMarkdownAPIClient }] : [MarkdownAPIClient]),
      ]
    };
  }
}
