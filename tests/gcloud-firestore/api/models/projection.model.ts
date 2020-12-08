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
  FieldReference,
} from '.';

/**
 * The projection of document's fields to return.
 */
export interface Projection {
  /** The fields to return.If empty, all fields are returned. To only return the nameof the document, use `['__name__']`. */
  fields?: FieldReference[];
}
