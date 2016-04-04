"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ExplosiveVegetation extends Card {
  constructor(game) {
    super(game, "Explosive Vegetation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ExplosiveVegetation;
