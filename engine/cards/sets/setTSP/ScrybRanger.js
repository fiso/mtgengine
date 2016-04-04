"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScrybRanger extends Card {
  constructor(game) {
    super(game, "Scryb Ranger", "Time Spiral", "TSP");
  }
}

module.exports = ScrybRanger;
