"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChickenEgg extends Card {
  constructor(game) {
    super(game, "Chicken Egg", "Unglued", "UGL");
  }
}

module.exports = ChickenEgg;
