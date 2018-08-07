"use strict";
const Constants = require ("../../../Constants");
const WitchHunterBase = require("../setTSB/WitchHunter");

class WitchHunter extends WitchHunterBase {
  constructor (game) {
    super(game, "Witch Hunter", "The Dark", "DRK");
  }
}

module.exports = WitchHunter;
