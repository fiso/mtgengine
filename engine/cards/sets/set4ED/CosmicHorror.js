"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CosmicHorror extends Card {
  constructor(game) {
    super(game, "Cosmic Horror", "Fourth Edition", "4ED");
  }
}

module.exports = CosmicHorror;
