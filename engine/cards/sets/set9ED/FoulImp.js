"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FoulImpBase = require("../setDD3_DVD/FoulImp.js");

class FoulImp extends FoulImpBase {
  constructor(game) {
    super(game, "Foul Imp", "Ninth Edition", "9ED");
  }
}

module.exports = FoulImp;
