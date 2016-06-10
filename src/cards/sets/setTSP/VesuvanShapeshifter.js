"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VesuvanShapeshifter extends UnimplementedCard {
  constructor (game) {
    super(game, "Vesuvan Shapeshifter", "Time Spiral", "TSP");
  }
}

module.exports = VesuvanShapeshifter;
