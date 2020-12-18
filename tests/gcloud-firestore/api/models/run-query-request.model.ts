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
  StructuredQuery,
  TransactionOptions,
} from '.';

/**
 * The request for Firestore.RunQuery.
 */
export interface RunQueryRequest {
  /**
   * Starts a new transaction and reads the documents.
   * Defaults to a read-only transaction.
   * The new transaction ID will be returned as the first response in the
   * stream.
   */
  newTransaction?: TransactionOptions;
  /**
   * Reads documents as they were at the given time.
   * This may not be older than 60 seconds.
   */
  readTime?: string;
  /** A structured query. */
  structuredQuery?: StructuredQuery;
  /** Reads documents in a transaction. */
  transaction?: string;
}
