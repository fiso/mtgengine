"use strict";
const Constants = require ("../../../Constants");
const WitchHunterBase = require("../setTSB/WitchHunter");

class WitchHunter extends WitchHunterBase {
  constructor (game) {
    super(game, "Witch Hunter", "Chronicles", "CHR");
  }
}

module.exports = WitchHunter;
