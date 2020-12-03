/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { UsersAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './users-api-client.service';
import { GuardedUsersAPIClient } from './guarded-users-api-client.service';

export { UsersAPIClient } from './users-api-client.service';
export { UsersAPIClientInterface } from './users-api-client.interface';
export { GuardedUsersAPIClient } from './guarded-users-api-client.service';

@NgModule({})
export class UsersAPIClientModule {
  /**
   * Use this method in your root module to provide the UsersAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<UsersAPIClientModule> {
    return {
      ngModule: UsersAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: UsersAPIClient, useClass: GuardedUsersAPIClient }] : [UsersAPIClient]),
      ]
    };
  }
}
