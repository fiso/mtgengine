"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RockslideElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Rockslide Elemental", "Planechase", "HOP");
  }
}

module.exports = RockslideElemental;
