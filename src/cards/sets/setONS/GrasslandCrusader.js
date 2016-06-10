"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrasslandCrusader extends UnimplementedCard {
  constructor (game) {
    super(game, "Grassland Crusader", "Onslaught", "ONS");
  }
}

module.exports = GrasslandCrusader;
