"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThranForge extends UnimplementedCard {
  constructor (game) {
    super(game, "Thran Forge", "Weatherlight", "WTH");
  }
}

module.exports = ThranForge;
