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
import { UserAPIClientInterface } from './user-api-client.interface';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { USE_DOMAIN, USE_HTTP_OPTIONS, UserAPIClient } from './user-api-client.service';
import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
import * as guards from '../../guards';

@Injectable()
export class GuardedUserAPIClient extends UserAPIClient implements UserAPIClientInterface {

  constructor(
    readonly httpClient: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    super(httpClient, domain, options);
  }

  /**
   * Get the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.User>;
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.User>>;
  getUser(
    args?: UserAPIClientInterface['getUserParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.User>>;
  getUser(
    args: UserAPIClientInterface['getUserParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.User | HttpResponse<models.User> | HttpEvent<models.User>> {

    return super.getUser(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'models.User' caught inconsistency.`, res)));
  }

  /**
   * Update the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.User>;
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.User>>;
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.User>>;
  patchUser(
    args: Exclude<UserAPIClientInterface['patchUserParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.User | HttpResponse<models.User> | HttpEvent<models.User>> {

    return super.patchUser(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUser(res) || console.error(`TypeGuard for response 'models.User' caught inconsistency.`, res)));
  }

  /**
   * Delete email address(es).
   * You can include a single email address or an array of addresses.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUserEmails(
    args: Exclude<UserAPIClientInterface['deleteUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUserEmails(args, requestHttpOptions, observe);
  }

  /**
   * List email addresses for a user.
   * In the final version of the API, this method will return an array of hashes
   * with extended information for each email address indicating if the address
   * has been verified and if it's primary email address for GitHub.
   * Until API v3 is finalized, use the application/vnd.github.v3 media type to
   * get other response format.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserEmails>;
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserEmails>>;
  getUserEmails(
    args?: UserAPIClientInterface['getUserEmailsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserEmails>>;
  getUserEmails(
    args: UserAPIClientInterface['getUserEmailsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.UserEmails | HttpResponse<models.UserEmails> | HttpEvent<models.UserEmails>> {

    return super.getUserEmails(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUserEmails(res) || console.error(`TypeGuard for response 'models.UserEmails' caught inconsistency.`, res)));
  }

  /**
   * Add email address(es).
   * You can post a single email address or an array of addresses.
   * 
   * Response generated for [ default ] HTTP response code.
   */
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  postUserEmails(
    args: Exclude<UserAPIClientInterface['postUserEmailsParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.postUserEmails(args, requestHttpOptions, observe);
  }

  /**
   * List the authenticated user's followers
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUserFollowers(
    args?: UserAPIClientInterface['getUserFollowersParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getUserFollowers(
    args: UserAPIClientInterface['getUserFollowersParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {

    return super.getUserFollowers(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  /**
   * List who the authenticated user is following.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getUserFollowing(
    args?: UserAPIClientInterface['getUserFollowingParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getUserFollowing(
    args: UserAPIClientInterface['getUserFollowingParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {

    return super.getUserFollowing(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUsers(res) || console.error(`TypeGuard for response 'models.Users' caught inconsistency.`, res)));
  }

  /**
   * Unfollow a user.
   * Unfollowing a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['deleteUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUserFollowingUsername(args, requestHttpOptions, observe);
  }

  /**
   * Check if you are following a user.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['getUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUserFollowingUsername(args, requestHttpOptions, observe);
  }

  /**
   * Follow a user.
   * Following a user requires the user to be logged in and authenticated with
   * basic auth or OAuth with the user:follow scope.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putUserFollowingUsername(
    args: Exclude<UserAPIClientInterface['putUserFollowingUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.putUserFollowingUsername(args, requestHttpOptions, observe);
  }

  /**
   * List issues.
   * List all issues across owned and member repositories for the authenticated
   * user.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Issues>;
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Issues>>;
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Issues>>;
  getUserIssues(
    args: Exclude<UserAPIClientInterface['getUserIssuesParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Issues | HttpResponse<models.Issues> | HttpEvent<models.Issues>> {

    return super.getUserIssues(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isIssues(res) || console.error(`TypeGuard for response 'models.Issues' caught inconsistency.`, res)));
  }

  /**
   * List your public keys.
   * Lists the current user's keys. Management of public keys via the API requires
   * that you are authenticated through basic auth, or OAuth with the 'user', 'write:public_key' scopes.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserKeys(
    args?: UserAPIClientInterface['getUserKeysParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getUserKeys(
    args: UserAPIClientInterface['getUserKeysParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {

    return super.getUserKeys(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGitignore(res) || console.error(`TypeGuard for response 'models.Gitignore' caught inconsistency.`, res)));
  }

  /**
   * Create a public key.
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserKeysKeyId>;
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserKeysKeyId>>;
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserKeysKeyId>>;
  postUserKeys(
    args: Exclude<UserAPIClientInterface['postUserKeysParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.UserKeysKeyId | HttpResponse<models.UserKeysKeyId> | HttpEvent<models.UserKeysKeyId>> {

    return super.postUserKeys(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUserKeysKeyId(res) || console.error(`TypeGuard for response 'models.UserKeysKeyId' caught inconsistency.`, res)));
  }

  /**
   * Delete a public key. Removes a public key. Requires that you are authenticated via Basic Auth or via OAuth with at least admin:public_key scope.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['deleteUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUserKeysKeyId(args, requestHttpOptions, observe);
  }

  /**
   * Get a single public key.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserKeysKeyId>;
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserKeysKeyId>>;
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserKeysKeyId>>;
  getUserKeysKeyId(
    args: Exclude<UserAPIClientInterface['getUserKeysKeyIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.UserKeysKeyId | HttpResponse<models.UserKeysKeyId> | HttpEvent<models.UserKeysKeyId>> {

    return super.getUserKeysKeyId(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUserKeysKeyId(res) || console.error(`TypeGuard for response 'models.UserKeysKeyId' caught inconsistency.`, res)));
  }

  /**
   * List public and private organizations for the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserOrgs(
    args?: UserAPIClientInterface['getUserOrgsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getUserOrgs(
    args: UserAPIClientInterface['getUserOrgsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {

    return super.getUserOrgs(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGitignore(res) || console.error(`TypeGuard for response 'models.Gitignore' caught inconsistency.`, res)));
  }

  /**
   * List repositories for the authenticated user. Note that this does not include
   * repositories owned by organizations which the user can access. You can lis
   * user organizations and list organization repositories separately.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repos>;
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repos>>;
  getUserRepos(
    args?: UserAPIClientInterface['getUserReposParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repos>>;
  getUserRepos(
    args: UserAPIClientInterface['getUserReposParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Repos | HttpResponse<models.Repos> | HttpEvent<models.Repos>> {

    return super.getUserRepos(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isRepos(res) || console.error(`TypeGuard for response 'models.Repos' caught inconsistency.`, res)));
  }

  /**
   * Create a new repository for the authenticated user. OAuth users must supply
   * repo scope.
   * 
   * Response generated for [ 201 ] HTTP response code.
   */
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Repos>;
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Repos>>;
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Repos>>;
  postUserRepos(
    args: Exclude<UserAPIClientInterface['postUserReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Repos | HttpResponse<models.Repos> | HttpEvent<models.Repos>> {

    return super.postUserRepos(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isRepos(res) || console.error(`TypeGuard for response 'models.Repos' caught inconsistency.`, res)));
  }

  /**
   * List repositories being starred by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Gitignore>;
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Gitignore>>;
  getUserStarred(
    args?: UserAPIClientInterface['getUserStarredParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Gitignore>>;
  getUserStarred(
    args: UserAPIClientInterface['getUserStarredParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Gitignore | HttpResponse<models.Gitignore> | HttpEvent<models.Gitignore>> {

    return super.getUserStarred(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isGitignore(res) || console.error(`TypeGuard for response 'models.Gitignore' caught inconsistency.`, res)));
  }

  /**
   * Unstar a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUserStarredOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * Check if you are starring a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUserStarredOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * Star a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putUserStarredOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserStarredOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.putUserStarredOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * List repositories being watched by the authenticated user.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.UserIdSubscribitions>;
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.UserIdSubscribitions>>;
  getUserSubscriptions(
    args?: UserAPIClientInterface['getUserSubscriptionsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.UserIdSubscribitions>>;
  getUserSubscriptions(
    args: UserAPIClientInterface['getUserSubscriptionsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.UserIdSubscribitions | HttpResponse<models.UserIdSubscribitions> | HttpEvent<models.UserIdSubscribitions>> {

    return super.getUserSubscriptions(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isUserIdSubscribitions(res) || console.error(`TypeGuard for response 'models.UserIdSubscribitions' caught inconsistency.`, res)));
  }

  /**
   * Stop watching a repository
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['deleteUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.deleteUserSubscriptionsOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * Check if you are watching a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['getUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.getUserSubscriptionsOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * Watch a repository.
   * Response generated for [ 204 ] HTTP response code.
   */
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putUserSubscriptionsOwnerRepo(
    args: Exclude<UserAPIClientInterface['putUserSubscriptionsOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {

    return super.putUserSubscriptionsOwnerRepo(args, requestHttpOptions, observe);
  }

  /**
   * List all of the teams across all of the organizations to which the authenticated user belongs. This method requires user or repo scope when authenticating via OAuth.
   * Response generated for [ 200 ] HTTP response code.
   */
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.TeamsList>;
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.TeamsList>>;
  getUserTeams(
    args?: UserAPIClientInterface['getUserTeamsParams'],
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.TeamsList>>;
  getUserTeams(
    args: UserAPIClientInterface['getUserTeamsParams'] = {},
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.TeamsList | HttpResponse<models.TeamsList> | HttpEvent<models.TeamsList>> {

    return super.getUserTeams(args, requestHttpOptions, observe)
      .pipe(tap((res: any) => guards.isTeamsList(res) || console.error(`TypeGuard for response 'models.TeamsList' caught inconsistency.`, res)));
  }

}
