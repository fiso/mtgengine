"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Contradict extends Card {
  constructor(game) {
    super(game, "Contradict", "Dragons of Tarkir", "DTK");
  }
}

module.exports = Contradict;
