"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MercilessEviction extends Card {
  constructor(game) {
    super(game, "Merciless Eviction", "Gatecrash", "GTC");
  }
}

module.exports = MercilessEviction;
