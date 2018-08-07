"use strict";
const Constants = require ("../../../Constants");
const TeferiHeroofDominariaBase = require("../setDOM/TeferiHeroofDominaria");

class TeferiHeroofDominaria extends TeferiHeroofDominariaBase {
  constructor (game) {
    super(game, "Teferi, Hero of Dominaria", "Dominaria Promos", "PDOM");
  }
}

module.exports = TeferiHeroofDominaria;
