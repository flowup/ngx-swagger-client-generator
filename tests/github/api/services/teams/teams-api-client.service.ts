/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import { HttpClient, HttpHeaders, HttpParams, HttpResponse, HttpEvent } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { TeamsAPIClientInterface } from './teams-api-client.interface';
import { Observable } from 'rxjs';import { DefaultHttpOptions, HttpOptions } from '../../types';

import * as models from '../../models';
export const USE_DOMAIN = new InjectionToken<string>('TeamsAPIClient_USE_DOMAIN');
export const USE_HTTP_OPTIONS = new InjectionToken<HttpOptions>('TeamsAPIClient_USE_HTTP_OPTIONS');

type APIHttpOptions = HttpOptions & {
  headers: HttpHeaders;
  params: HttpParams;
};

@Injectable()
export class TeamsAPIClient implements TeamsAPIClientInterface {

  readonly options: APIHttpOptions;

  readonly domain: string = `https://api.github.com`;

  constructor(
    private readonly http: HttpClient,
    @Optional() @Inject(USE_DOMAIN) domain?: string,
    @Optional() @Inject(USE_HTTP_OPTIONS) options?: DefaultHttpOptions,
  ) {
    if (domain != null) {
      this.domain = domain;
    }

    this.options = {
      headers: new HttpHeaders(options && options.headers ? options.headers : {}),
      params: new HttpParams(options && options.params ? options.params : {}),
      ...(options && options.reportProgress ? { reportProgress: options.reportProgress } : {}),
      ...(options && options.withCredentials ? { withCredentials: options.withCredentials } : {})
    };
  }

  /**
   * Delete team.
   * In order to delete a team, the authenticated user must be an owner of the
   * org that the team is associated with.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.delete<void>(`${this.domain}${path}`, options);
  }

  /**
   * Get team.
   * Response generated for [ 200 ] HTTP response code.
   */
  getTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Team>;
  getTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Team>>;
  getTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Team>>;
  getTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Team | HttpResponse<models.Team> | HttpEvent<models.Team>> {
    const path = `/teams/${args.teamId}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<models.Team>(`${this.domain}${path}`, options);
  }

  /**
   * Edit team.
   * In order to edit a team, the authenticated user must be an owner of the org
   * that the team is associated with.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  patchTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['patchTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Team>;
  patchTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['patchTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Team>>;
  patchTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['patchTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Team>>;
  patchTeamsTeamId(
    args: Exclude<TeamsAPIClientInterface['patchTeamsTeamIdParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Team | HttpResponse<models.Team> | HttpEvent<models.Team>> {
    const path = `/teams/${args.teamId}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.patch<models.Team>(`${this.domain}${path}`, JSON.stringify(args.body), options);
  }

  /**
   * List team members.
   * In order to list members in a team, the authenticated user must be a member
   * of the team.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getTeamsTeamIdMembers(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.Users>;
  getTeamsTeamIdMembers(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.Users>>;
  getTeamsTeamIdMembers(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.Users>>;
  getTeamsTeamIdMembers(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>> {
    const path = `/teams/${args.teamId}/members`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<models.Users>(`${this.domain}${path}`, options);
  }

  /**
   * The "Remove team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Remove team membership API instead. It allows you to remove both active and pending memberships.
   * 
   * 
   * Remove team member.
   * In order to remove a user from a team, the authenticated user must have 'admin'
   * permissions to the team or be an owner of the org that the team is associated
   * with.
   * NOTE This does not delete the user, it just remove them from the team.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.delete<void>(`${this.domain}${path}`, options);
  }

  /**
   * The "Get team member" API is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Get team membership API instead. It allows you to get both active and pending memberships.
   * 
   * 
   * Get team member.
   * In order to get if a user is a member of a team, the authenticated user mus
   * be a member of the team.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  getTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<void>(`${this.domain}${path}`, options);
  }

  /**
   * The API (described below) is deprecated and is scheduled for removal in the next major version of the API. We recommend using the Add team membership API instead. It allows you to invite new organization members to your teams.
   * 
   * 
   * Add team member.
   * In order to add a user to a team, the authenticated user must have 'admin'
   * permissions to the team or be an owner of the org that the team is associated
   * with.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  putTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putTeamsTeamIdMembersUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembersUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/members/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.put<void>(`${this.domain}${path}`, options);
  }

  /**
   * Remove team membership.
   * In order to remove a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with. NOTE: This does not delete the user, it just removes their membership from the team.
   * 
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.delete<void>(`${this.domain}${path}`, options);
  }

  /**
   * Get team membership.
   * In order to get a user's membership with a team, the authenticated user must be a member of the team or an owner of the team's organization.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  getTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.TeamMembership>;
  getTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.TeamMembership>>;
  getTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.TeamMembership>>;
  getTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.TeamMembership | HttpResponse<models.TeamMembership> | HttpEvent<models.TeamMembership>> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<models.TeamMembership>(`${this.domain}${path}`, options);
  }

  /**
   * Add team membership.
   * In order to add a membership between a user and a team, the authenticated user must have 'admin' permissions to the team or be an owner of the organization that the team is associated with.
   * 
   * 
   * If the user is already a part of the team's organization (meaning they're on at least one other team in the organization), this endpoint will add the user to the team.
   * 
   * 
   * If the user is completely unaffiliated with the team's organization (meaning they're on none of the organization's teams), this endpoint will send an invitation to the user via email. This newly-created membership will be in the 'pending' state until the user accepts the invitation, at which point the membership will transition to the 'active' state and the user will be added as a member of the team.
   * 
   * Response generated for [ 200 ] HTTP response code.
   */
  putTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.TeamMembership>;
  putTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.TeamMembership>>;
  putTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.TeamMembership>>;
  putTeamsTeamIdMembershipsUsername(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdMembershipsUsernameParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.TeamMembership | HttpResponse<models.TeamMembership> | HttpEvent<models.TeamMembership>> {
    const path = `/teams/${args.teamId}/memberships/${args.username}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.put<models.TeamMembership>(`${this.domain}${path}`, options);
  }

  /**
   * List team repos
   * Response generated for [ 200 ] HTTP response code.
   */
  getTeamsTeamIdRepos(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<models.TeamRepos>;
  getTeamsTeamIdRepos(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<models.TeamRepos>>;
  getTeamsTeamIdRepos(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<models.TeamRepos>>;
  getTeamsTeamIdRepos(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<models.TeamRepos | HttpResponse<models.TeamRepos> | HttpEvent<models.TeamRepos>> {
    const path = `/teams/${args.teamId}/repos`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<models.TeamRepos>(`${this.domain}${path}`, options);
  }

  /**
   * In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
   * Response generated for [ missing ] HTTP response code.
   */
  putTeamsTeamIdReposOrgRepo(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdReposOrgRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  putTeamsTeamIdReposOrgRepo(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdReposOrgRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  putTeamsTeamIdReposOrgRepo(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdReposOrgRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  putTeamsTeamIdReposOrgRepo(
    args: Exclude<TeamsAPIClientInterface['putTeamsTeamIdReposOrgRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/repos/${args.org}/${args.repo}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.put<void>(`${this.domain}${path}`, options);
  }

  /**
   * In order to remove a repository from a team, the authenticated user must be an owner of the org that the team is associated with. NOTE: This does not delete the repository, it just removes it from the team.
   * Response generated for [ 204 ] HTTP response code.
   */
  deleteTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  deleteTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  deleteTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  deleteTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['deleteTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/repos/${args.owner}/${args.repo}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.delete<void>(`${this.domain}${path}`, options);
  }

  /**
   * Check if a team manages a repository
   * Response generated for [ missing ] HTTP response code.
   */
  getTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'body',
  ): Observable<void>;
  getTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'response',
  ): Observable<HttpResponse<void>>;
  getTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe?: 'events',
  ): Observable<HttpEvent<void>>;
  getTeamsTeamIdReposOwnerRepo(
    args: Exclude<TeamsAPIClientInterface['getTeamsTeamIdReposOwnerRepoParams'], undefined>,
    requestHttpOptions?: HttpOptions,
    observe: any = 'body',
  ): Observable<void | HttpResponse<void> | HttpEvent<void>> {
    const path = `/teams/${args.teamId}/repos/${args.owner}/${args.repo}`;
    const options = {
      ...this.options,
      ...requestHttpOptions,
      observe,
    };

    if ('xGitHubMediaType' in args) {
      options.headers = options.headers.set('X-GitHub-Media-Type', String(args.xGitHubMediaType));
    }
    if ('accept' in args) {
      options.headers = options.headers.set('Accept', String(args.accept));
    }
    if ('xRateLimit' in args) {
      options.headers = options.headers.set('X-RateLimit-Limit', String(args.xRateLimit));
    }
    if ('xRateLimitRemaining' in args) {
      options.headers = options.headers.set('X-RateLimit-Remaining', String(args.xRateLimitRemaining));
    }
    if ('xRateLimitReset' in args) {
      options.headers = options.headers.set('X-RateLimit-Reset', String(args.xRateLimitReset));
    }
    if ('xGitHubRequestId' in args) {
      options.headers = options.headers.set('X-GitHub-Request-Id', String(args.xGitHubRequestId));
    }
    return this.http.get<void>(`${this.domain}${path}`, options);
  }

}
