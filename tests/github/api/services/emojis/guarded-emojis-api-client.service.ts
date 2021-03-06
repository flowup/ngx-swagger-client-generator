/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, Optional } from '@angular/core';
import { EmojisAPIClientInterface } from './emojis-api-client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USE_DOMAIN, USE_HTTP_OPTIONS, EmojisAPIClient } from './emojis-api-client.service';
import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedEmojisAPIClient extends EmojisAPIClient implements EmojisAPIClientInterface {

  constructor(
    readonly httpClient: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    super(httpClient, domain, options);
  }

  /**
   * Lists all the emojis available to use on GitHub.
   * Response generated for [ 200 ] HTTP response code.
   */
  getEmojis(
    args?: EmojisAPIClientInterface['getEmojisParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Emojis>;
  getEmojis(
    args?: EmojisAPIClientInterface['getEmojisParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Emojis>>;
  getEmojis(
    args?: EmojisAPIClientInterface['getEmojisParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Emojis>>;
  getEmojis(
    args: EmojisAPIClientInterface['getEmojisParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Emojis | HttpResponse<models.Emojis> | HttpEvent<models.Emojis>> {

    return super.getEmojis(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isEmojis(res) || console.error(`TypeGuard for response 'models.Emojis' caught inconsistency.`, res)));
  }

}
