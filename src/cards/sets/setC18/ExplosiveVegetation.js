"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExplosiveVegetation extends UnimplementedCard {
  constructor (game) {
    super(game, "Explosive Vegetation", "Commander 2018", "C18");
  }
}

module.exports = ExplosiveVegetation;
