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
 * Options for a transaction that can only be used to read documents.
 */
export interface ReadOnly {
  /** Reads documents at the given time.This may not be older than 60 seconds. */
  readTime?: string;
}
