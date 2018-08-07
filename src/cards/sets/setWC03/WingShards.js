"use strict";
const Constants = require ("../../../Constants");
const WingShardsBase = require("../setIMA/WingShards");

class WingShards extends WingShardsBase {
  constructor (game) {
    super(game, "Wing Shards", "World Championship Decks 2003", "WC03");
  }
}

module.exports = WingShards;
