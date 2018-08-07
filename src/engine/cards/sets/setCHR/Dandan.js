"use strict";
const Constants = require ("../../../Constants");
const DandanBase = require("../setTSB/Dandan");

class Dandan extends DandanBase {
  constructor (game) {
    super(game, "Dandân", "Chronicles", "CHR");
  }
}

module.exports = Dandan;
