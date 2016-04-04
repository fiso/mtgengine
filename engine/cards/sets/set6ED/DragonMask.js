"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DragonMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Dragon Mask", "Classic Sixth Edition", "6ED");
  }
}

module.exports = DragonMask;
