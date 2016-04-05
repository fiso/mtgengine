"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpiritShackle extends UnimplementedCard {
  constructor(game) {
    super(game, "Spirit Shackle", "Fourth Edition", "4ED");
  }
}

module.exports = SpiritShackle;
