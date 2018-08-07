"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritShackle extends UnimplementedCard {
  constructor (game) {
    super(game, "Spirit Shackle", "Masters Edition III", "ME3");
  }
}

module.exports = SpiritShackle;
