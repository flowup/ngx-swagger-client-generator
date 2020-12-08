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
  ReadOnly,
  ReadWrite,
} from '.';

/**
 * Options for creating a new transaction.
 */
export interface TransactionOptions {
  /** The transaction can only be used for read operations. */
  readOnly?: ReadOnly;
  /** The transaction can be used for both read and write operations. */
  readWrite?: ReadWrite;
}
