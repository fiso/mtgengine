"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VanishintoMemory extends UnimplementedCard {
  constructor (game) {
    super(game, "Vanish into Memory", "Modern Masters 2017", "MM3");
  }
}

module.exports = VanishintoMemory;
