"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkitteringMonstrosity extends UnimplementedCard {
  constructor (game) {
    super(game, "Skittering Monstrosity", "Time Spiral", "TSP");
  }
}

module.exports = SkitteringMonstrosity;
