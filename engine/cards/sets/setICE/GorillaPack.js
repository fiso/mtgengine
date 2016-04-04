"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GorillaPack extends UnimplementedCard {
  constructor(game) {
    super(game, "Gorilla Pack", "Ice Age", "ICE");
  }
}

module.exports = GorillaPack;
