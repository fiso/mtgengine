"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SkycloudEgg extends UnimplementedCard {
  constructor(game) {
    super(game, "Skycloud Egg", "Odyssey", "ODY");
  }
}

module.exports = SkycloudEgg;
