"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WeightofSpires extends Card {
  constructor(game) {
    super(game, "Weight of Spires", "Dissension", "DIS");
  }
}

module.exports = WeightofSpires;
