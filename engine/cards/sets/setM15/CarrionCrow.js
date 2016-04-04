"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CarrionCrow extends Card {
  constructor(game) {
    super(game, "Carrion Crow", "Magic 2015 Core Set", "M15");
  }
}

module.exports = CarrionCrow;
