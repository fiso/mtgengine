"use strict";
const Constants = require ("../../../Constants");
const ReplenishBase = require("../setWC00/Replenish");

class Replenish extends ReplenishBase {
  constructor (game) {
    super(game, "Replenish", "Urza's Destiny", "UDS");
  }
}

module.exports = Replenish;
