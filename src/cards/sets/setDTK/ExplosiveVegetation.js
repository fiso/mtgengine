"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveVegetation extends UnimplementedCard {
  constructor(game) {
    super(game, "Explosive Vegetation", "Dragons of Tarkir", "DTK");
  }
}

module.exports = ExplosiveVegetation;
