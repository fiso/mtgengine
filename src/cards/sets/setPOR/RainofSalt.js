"use strict";
const Constants = require ("../../../Constants");
const RainofSaltBase = require("../setUSG/RainofSalt");

class RainofSalt extends RainofSaltBase {
  constructor (game) {
    super(game, "Rain of Salt", "Portal", "POR");
  }
}

module.exports = RainofSalt;
