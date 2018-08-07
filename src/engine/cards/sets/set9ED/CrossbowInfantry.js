"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CrossbowInfantry extends UnimplementedCard {
  constructor (game) {
    super(game, "Crossbow Infantry", "Ninth Edition", "9ED");
  }
}

module.exports = CrossbowInfantry;
