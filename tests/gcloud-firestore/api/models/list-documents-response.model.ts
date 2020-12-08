/**
 * This file is auto-generated by the API client generator.
 * https://github.com/flowup/api-client-generator
 *
 * Avoid editing this file manually unless necessary.
 * Please report any bugs so they can be addressed in future versions.
 */

/* tslint:disable */
/* eslint-disable */

import {
  Document,
} from '.';

/**
 * The response for Firestore.ListDocuments.
 */
export interface ListDocumentsResponse {
  /** The Documents found. */
  documents?: Document[];
  /** The next page token. */
  nextPageToken?: string;
}
