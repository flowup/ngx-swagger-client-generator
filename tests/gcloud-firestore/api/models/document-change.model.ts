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
 * A Document has changed.
 * 
 * May be the result of multiple writes, including deletes, that
 * ultimately resulted in a new value for the Document.
 * 
 * Multiple DocumentChange messages may be returned for the same logical
 * change, if multiple targets are affected.
 */
export interface DocumentChange {
  /** The new state of the Document.If `mask` is set, contains only fields that were updated or added. */
  document?: Document;
  /** A set of target IDs for targets that no longer match this document. */
  removedTargetIds?: number[];
  /** A set of target IDs of targets that match this document. */
  targetIds?: number[];
}
