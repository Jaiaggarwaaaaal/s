// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { Eniac } from '../client';

export abstract class APIResource {
  protected _client: Eniac;

  constructor(client: Eniac) {
    this._client = client;
  }
}
