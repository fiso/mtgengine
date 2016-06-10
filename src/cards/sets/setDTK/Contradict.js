"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Contradict extends UnimplementedCard {
  constructor (game) {
    super(game, "Contradict", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Contradict;
