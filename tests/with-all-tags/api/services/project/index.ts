/* tslint:disable */

import { NgModule, ModuleWithProviders } from '@angular/core';
import { ProjectAPIClient, USE_DOMAIN, USE_HTTP_OPTIONS } from './project-api-client.service';
import { GuardedProjectAPIClient } from './guarded-project-api-client.service';

export { ProjectAPIClient } from './project-api-client.service';
export { ProjectAPIClientInterface } from './project-api-client.interface';
export { GuardedProjectAPIClient } from './guarded-project-api-client.service';

@NgModule({})
export class ProjectAPIClientModule {
  /**
   * Use this method in your root module to provide the ProjectAPIClientModule
   *
   * If you are not providing
   * @param { APIClientModuleConfig } config
   * @returns { ModuleWithProviders }
   */
  static forRoot(config: APIClientModuleConfig = {}): ModuleWithProviders<ProjectAPIClientModule> {
    return {
      ngModule: ProjectAPIClientModule,
      providers: [
        ...(config.domain != null ? [{provide: USE_DOMAIN, useValue: config.domain}] : []),
        ...(config.httpOptions ? [{provide: USE_HTTP_OPTIONS, useValue: config.httpOptions}] : []),
        ...(config.guardResponses ? [{provide: ProjectAPIClient, useClass: GuardedProjectAPIClient }] : [ProjectAPIClient]),
      ]
    };
  }
}
