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
export interface TeamsAPIClientInterface {
  /**
   * Arguments object for method `deleteTeamsTeamId`.
   */
  deleteTeamsTeamIdParams?: {
    /**  Id of team. */
    teamId: number,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `getTeamsTeamId`.
   */
  getTeamsTeamIdParams?: {
    /**  Id of team. */
    teamId: number,
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
    observe?: any,
  ): Observable<models.Team | HttpResponse<models.Team> | HttpEvent<models.Team>>;

  /**
   * Arguments object for method `patchTeamsTeamId`.
   */
  patchTeamsTeamIdParams?: {
    /**  Id of team. */
    teamId: number,
    /**  (optional) You can check the current version of media type in responses.  */
    xGitHubMediaType?: string,
    /**  (optional) Is used to set specified media type. */
    accept?: string,
    xRateLimit?: number,
    xRateLimitRemaining?: number,
    xRateLimitReset?: number,
    xGitHubRequestId?: number,
    body: models.EditTeam,
  };

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
    observe?: any,
  ): Observable<models.Team | HttpResponse<models.Team> | HttpEvent<models.Team>>;

  /**
   * Arguments object for method `getTeamsTeamIdMembers`.
   */
  getTeamsTeamIdMembersParams?: {
    /**  Id of team. */
    teamId: number,
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
    observe?: any,
  ): Observable<models.Users | HttpResponse<models.Users> | HttpEvent<models.Users>>;

  /**
   * Arguments object for method `deleteTeamsTeamIdMembersUsername`.
   */
  deleteTeamsTeamIdMembersUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `getTeamsTeamIdMembersUsername`.
   */
  getTeamsTeamIdMembersUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `putTeamsTeamIdMembersUsername`.
   */
  putTeamsTeamIdMembersUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `deleteTeamsTeamIdMembershipsUsername`.
   */
  deleteTeamsTeamIdMembershipsUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `getTeamsTeamIdMembershipsUsername`.
   */
  getTeamsTeamIdMembershipsUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<models.TeamMembership | HttpResponse<models.TeamMembership> | HttpEvent<models.TeamMembership>>;

  /**
   * Arguments object for method `putTeamsTeamIdMembershipsUsername`.
   */
  putTeamsTeamIdMembershipsUsernameParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a member. */
    username: string,
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
    observe?: any,
  ): Observable<models.TeamMembership | HttpResponse<models.TeamMembership> | HttpEvent<models.TeamMembership>>;

  /**
   * Arguments object for method `getTeamsTeamIdRepos`.
   */
  getTeamsTeamIdReposParams?: {
    /**  Id of team. */
    teamId: number,
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
    observe?: any,
  ): Observable<models.TeamRepos | HttpResponse<models.TeamRepos> | HttpEvent<models.TeamRepos>>;

  /**
   * Arguments object for method `putTeamsTeamIdReposOrgRepo`.
   */
  putTeamsTeamIdReposOrgRepoParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a organization. */
    org: string,
    /**  Name of a repository. */
    repo: string,
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
   * In order to add a repository to a team, the authenticated user must be an owner of the org that the team is associated with. Also, the repository must be owned by the organization, or a direct fork of a repository owned by the organization.
   * Response generated for [ default ] HTTP response code.
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `deleteTeamsTeamIdReposOwnerRepo`.
   */
  deleteTeamsTeamIdReposOwnerRepoParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a repository owner. */
    owner: string,
    /**  Name of a repository. */
    repo: string,
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

  /**
   * Arguments object for method `getTeamsTeamIdReposOwnerRepo`.
   */
  getTeamsTeamIdReposOwnerRepoParams?: {
    /**  Id of team. */
    teamId: number,
    /**  Name of a repository owner. */
    owner: string,
    /**  Name of a repository. */
    repo: string,
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
   * Check if a team manages a repository
   * Response generated for [ default ] HTTP response code.
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
    observe?: any,
  ): Observable<void | HttpResponse<void> | HttpEvent<void>>;

}
