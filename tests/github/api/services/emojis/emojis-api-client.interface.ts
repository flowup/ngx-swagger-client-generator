/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpResponse, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';import { HttpOptions } from '../../types';

import * as models from '../../models';
export interface EmojisAPIClientInterface {
  /**
   * Arguments object for method `getEmojis`.
   */
  getEmojisParams?: {
    /**  (optional) You can check the current version of media type in responses.  */
    xGitHubMediaType?: string,
    /**  (optional) Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Lists all the emojis available to use on GitHub.
   * Response generated for [ 200 ] HTTP response code.
   */
  getEmojis(
    args: Exclude<EmojisAPIClientInterface['getEmojisParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Emojis>;
  getEmojis(
    args: Exclude<EmojisAPIClientInterface['getEmojisParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Emojis>>;
  getEmojis(
    args: Exclude<EmojisAPIClientInterface['getEmojisParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Emojis>>;
  getEmojis(
    args: Exclude<EmojisAPIClientInterface['getEmojisParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: any,
  ): Observable<models.Emojis | HttpResponse<models.Emojis> | HttpEvent<models.Emojis>>;

}
