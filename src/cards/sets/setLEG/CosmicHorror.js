"use strict";
const Constants = require ("../../../Constants");
const CosmicHorrorBase = require("../setME3/CosmicHorror");

class CosmicHorror extends CosmicHorrorBase {
  constructor (game) {
    super(game, "Cosmic Horror", "Legends", "LEG");
  }
}

module.exports = CosmicHorror;
