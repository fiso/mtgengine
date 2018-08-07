"use strict";
const assert = require("assert");

class MTGObject {
  constructor (game) {
    assert(game);
    this._game = game;
    this._zone = undefined;
    this._guid = game.getGuid("object");
    this._counters = {};
  }

  placeInZone (zone) {
    this._zone = zone;
  }

  getCurrentZone () {
    return this._zone;
  }

  hasKeywordAbility (keyword) {
    // FIXME: Check properly
    return false;
  }

  getCountersOfType (type) {
    return type in this._counters ? this._counters[type] : 0;
  }

  setCountersOfType (type, count) {
    this._counters[type] = count;
  }

  addCountersOfType (type, count) {
    if (!(type in this._counters)) {
      this._counters[type] = 0;
    }

    this._counters[type] = Math.max(0, this._counters[type] + count);
    return this._counters[type];
  }

  removeCountersOfType (type, count) {
    return this.addCountersOfType(type, -count);
  }
}

module.exports = MTGObject;
