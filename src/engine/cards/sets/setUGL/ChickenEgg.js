"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChickenEgg extends UnimplementedCard {
  constructor (game) {
    super(game, "Chicken Egg", "Unglued", "UGL");
  }
}

module.exports = ChickenEgg;
