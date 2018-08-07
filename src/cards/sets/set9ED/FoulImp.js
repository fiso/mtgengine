"use strict";
const Constants = require ("../../../Constants");
const FoulImpBase = require("../setDDR/FoulImp");

class FoulImp extends FoulImpBase {
  constructor (game) {
    super(game, "Foul Imp", "Ninth Edition", "9ED");
  }
}

module.exports = FoulImp;
