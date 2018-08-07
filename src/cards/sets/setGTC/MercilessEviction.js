"use strict";
const Constants = require ("../../../Constants");
const MercilessEvictionBase = require("../setCM2/MercilessEviction");

class MercilessEviction extends MercilessEvictionBase {
  constructor (game) {
    super(game, "Merciless Eviction", "Gatecrash", "GTC");
  }
}

module.exports = MercilessEviction;
