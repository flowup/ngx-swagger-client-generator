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
  Data,
  ItemList,
  Pet,
} from '.';

export interface DataModel {
  audioConfig?: Data;
  /** { [key: string]: any }[] or object[] */
  details?: object[];
  entities?: number[];
  id?: number;
  /** base64 user uploaded image string */
  imageData?: string;
  /** url to user avatar image */
  imageUrl?: string;
  /** { [key: string]: any } or object */
  metadata?: object;
  roleId?: number;
  testWithArray?: Pet[] & Data;
  text?: ItemList & Data;
}
