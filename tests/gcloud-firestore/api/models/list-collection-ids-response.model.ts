/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */


/**
 * The response from Firestore.ListCollectionIds.
 */
export interface ListCollectionIdsResponse {
  /** The collection ids. */
  collectionIds?: string[];
  /** A page token that may be used to continue the list. */
  nextPageToken?: string;
}
