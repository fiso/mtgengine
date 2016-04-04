"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CosmicHorrorBase = require("../set4ED/CosmicHorror.js");

class CosmicHorror extends CosmicHorrorBase {
  constructor(game) {
    super(game, "Cosmic Horror", "Legends", "LEG");
  }
}

module.exports = CosmicHorror;
