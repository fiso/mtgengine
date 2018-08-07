"use strict";
const Constants = require ("../../../Constants");
const DandanBase = require("../setTSB/Dandan");

class Dandan extends DandanBase {
  constructor (game) {
    super(game, "Dandân", "Arabian Nights", "ARN");
  }
}

module.exports = Dandan;
