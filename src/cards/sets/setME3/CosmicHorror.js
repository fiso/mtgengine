"use strict";
const Constants = require ("../../../Constants");
const CosmicHorrorBase = require("../set4ED/CosmicHorror");

class CosmicHorror extends CosmicHorrorBase {
  constructor (game) {
    super(game, "Cosmic Horror", "Masters Edition III", "ME3");
  }
}

module.exports = CosmicHorror;
