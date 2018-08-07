"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StormcragElemental extends UnimplementedCard {
  constructor (game) {
    super(game, "Stormcrag Elemental", "Dragons of Tarkir", "DTK");
  }
}

module.exports = StormcragElemental;
