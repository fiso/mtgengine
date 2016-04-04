"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JestersMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Jester's Mask", "Ice Age", "ICE");
  }
}

module.exports = JestersMask;
