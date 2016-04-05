"use strict";
const Constants = require ("../../../Constants");
const RainofSaltBase = require("../setPOR/RainofSalt");

class RainofSalt extends RainofSaltBase {
  constructor(game) {
    super(game, "Rain of Salt", "Urza's Saga", "USG");
  }
}

module.exports = RainofSalt;
