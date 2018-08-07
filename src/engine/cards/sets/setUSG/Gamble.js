"use strict";
const Constants = require ("../../../Constants");
const GambleBase = require("../setEMA/Gamble");

class Gamble extends GambleBase {
  constructor (game) {
    super(game, "Gamble", "Urza's Saga", "USG");
  }
}

module.exports = Gamble;
