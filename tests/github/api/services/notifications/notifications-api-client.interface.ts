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
export interface NotificationsAPIClientInterface {
  /**
   * Arguments object for method `getNotifications`.
   */
  getNotificationsParams?: {
    /** True to show notifications marked as read. */
    all?: boolean,
    /**
     * True to show only notifications in which the user is directly participating
     * or mentioned.
     * 
     */
    participating?: boolean,
    /**
     * The time should be passed in as UTC in the ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ.
     * Example: "2012-10-09T23:39:01Z".
     * 
     */
    since?: string,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * List your notifications.
   * List all notifications for the current user, grouped by repository.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotifications(
    args?: NotificationsAPIClientInterface['getNotificationsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Notifications>;
  getNotifications(
    args?: NotificationsAPIClientInterface['getNotificationsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Notifications>>;
  getNotifications(
    args?: NotificationsAPIClientInterface['getNotificationsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Notifications>>;

  /**
   * Arguments object for method `putNotifications`.
   */
  putNotificationsParams?: {
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.NotificationMarkRead,
  };

  /**
   * Mark as read.
   * Marking a notification as "read" removes it from the default view on GitHub.com.
   * 
   * Response generated for [ 205 ] HTTP response code.
   */
  putNotifications(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putNotifications(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putNotifications(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getNotificationsThreadsId`.
   */
  getNotificationsThreadsIdParams?: {
    /** Id of thread. */
    id: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * View a single thread.
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Notifications>;
  getNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Notifications>>;
  getNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Notifications>>;

  /**
   * Arguments object for method `patchNotificationsThreadsId`.
   */
  patchNotificationsThreadsIdParams?: {
    /** Id of thread. */
    id: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Mark a thread as read
   * Response generated for [ 205 ] HTTP response code.
   */
  patchNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['patchNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  patchNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['patchNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  patchNotificationsThreadsId(
    args: Exclude<NotificationsAPIClientInterface['patchNotificationsThreadsIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `deleteNotificationsThreadsIdSubscription`.
   */
  deleteNotificationsThreadsIdSubscriptionParams?: {
    /** Id of thread. */
    id: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Delete a Thread Subscription.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['deleteNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['deleteNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['deleteNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;

  /**
   * Arguments object for method `getNotificationsThreadsIdSubscription`.
   */
  getNotificationsThreadsIdSubscriptionParams?: {
    /** Id of thread. */
    id: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
  };

  /**
   * Get a Thread Subscription.
   * Response generated for [ 200 ] HTTP response code.
   */
  getNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Subscription>;
  getNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Subscription>>;
  getNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['getNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Subscription>>;

  /**
   * Arguments object for method `putNotificationsThreadsIdSubscription`.
   */
  putNotificationsThreadsIdSubscriptionParams?: {
    /** Id of thread. */
    id: number,
    /**
     * You can check the current version of media type in responses.
     * 
     */
    xGitHubMediaType?: string,
    /** Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.PutSubscription,
  };

  /**
   * Set a Thread Subscription.
   * This lets you subscribe to a thread, or ignore it. Subscribing to a thread
   * is unnecessary if the user is already subscribed to the repository. Ignoring
   * a thread will mute all future notifications (until you comment or get @mentioned).
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  putNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Subscription>;
  putNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Subscription>>;
  putNotificationsThreadsIdSubscription(
    args: Exclude<NotificationsAPIClientInterface['putNotificationsThreadsIdSubscriptionParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Subscription>>;

}
