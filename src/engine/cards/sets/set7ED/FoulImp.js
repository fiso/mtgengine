"use strict";
const Constants = require ("../../../Constants");
const FoulImpBase = require("../setDDR/FoulImp");

class FoulImp extends FoulImpBase {
  constructor (game) {
    super(game, "Foul Imp", "Seventh Edition", "7ED");
  }
}

module.exports = FoulImp;
