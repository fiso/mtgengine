"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RiverDelta extends UnimplementedCard {
  constructor (game) {
    super(game, "River Delta", "Ice Age", "ICE");
  }
}

module.exports = RiverDelta;
