"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkwaterEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkwater Egg", "Odyssey", "ODY");
  }
}

module.exports = DarkwaterEgg;
