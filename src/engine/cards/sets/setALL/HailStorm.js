"use strict";
const Constants = require ("../../../Constants");
const HailStormBase = require("../setTSB/HailStorm");

class HailStorm extends HailStormBase {
  constructor (game) {
    super(game, "Hail Storm", "Alliances", "ALL");
  }
}

module.exports = HailStorm;
