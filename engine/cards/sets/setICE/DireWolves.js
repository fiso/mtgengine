"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DireWolves extends UnimplementedCard {
  constructor(game) {
    super(game, "Dire Wolves", "Ice Age", "ICE");
  }
}

module.exports = DireWolves;
