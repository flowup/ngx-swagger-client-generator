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
  ArrayValue,
  LatLng,
  MapValue,
} from '.';

/**
 * A message that can hold any of the supported value types.
 */
export interface Value {
  /**
   * An array value.
   * 
   * Cannot contain another array value.
   */
  arrayValue?: ArrayValue;
  /** A boolean value. */
  booleanValue?: boolean;
  /**
   * A bytes value.
   * 
   * Must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes are considered by queries.
   */
  bytesValue?: string;
  /** A double value. */
  doubleValue?: number;
  /** A geo point value representing a point on the surface of Earth. */
  geoPointValue?: LatLng;
  /** An integer value. */
  integerValue?: string;
  /** A map value. */
  mapValue?: MapValue;
  /** A null value. */
  nullValue?: ('NULL_VALUE');
  /**
   * A reference to a document. For example:
   * `projects/{project_id}/databases/{database_id}/documents/{document_path}`.
   */
  referenceValue?: string;
  /**
   * A string value.
   * 
   * 
   * The string, represented as UTF-8, must not exceed 1 MiB - 89 bytes.
   * Only the first 1,500 bytes of the UTF-8 representation are considered by
   * queries.
   */
  stringValue?: string;
  /**
   * A timestamp value.
   * 
   * 
   * Precise only to microseconds. When stored, any additional precision is
   * rounded down.
   */
  timestampValue?: string;
}
