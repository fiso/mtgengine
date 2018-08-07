"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DisplayofDominance extends UnimplementedCard {
  constructor (game) {
    super(game, "Display of Dominance", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DisplayofDominance;
