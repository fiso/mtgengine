"use strict";

class CacheableApi {
  constructor () {
    this._cache = {};
  }

  getObject (key) {
    return this._cache[key];
  }

  setObject (key, value) {
    this._cache[key] = value;
  }
}

module.exports = CacheableApi;
