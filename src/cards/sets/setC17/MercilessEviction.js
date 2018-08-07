"use strict";
const Constants = require ("../../../Constants");
const MercilessEvictionBase = require("../setCM2/MercilessEviction");

class MercilessEviction extends MercilessEvictionBase {
  constructor (game) {
    super(game, "Merciless Eviction", "Commander 2017", "C17");
  }
}

module.exports = MercilessEviction;
