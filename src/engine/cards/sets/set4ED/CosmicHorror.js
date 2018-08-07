"use strict";
const Constants = require ("../../../Constants");
const CosmicHorrorBase = require("../setME3/CosmicHorror");

class CosmicHorror extends CosmicHorrorBase {
  constructor (game) {
    super(game, "Cosmic Horror", "Fourth Edition", "4ED");
  }
}

module.exports = CosmicHorror;
