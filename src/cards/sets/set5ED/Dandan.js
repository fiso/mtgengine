"use strict";
const Constants = require ("../../../Constants");
const DandanBase = require("../setARN/Dandan");

class Dandan extends DandanBase {
  constructor (game) {
    super(game, "Dandân", "Fifth Edition", "5ED");
  }
}

module.exports = Dandan;
