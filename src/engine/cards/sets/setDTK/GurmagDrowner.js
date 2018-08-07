"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GurmagDrowner extends UnimplementedCard {
  constructor (game) {
    super(game, "Gurmag Drowner", "Dragons of Tarkir", "DTK");
  }
}

module.exports = GurmagDrowner;
