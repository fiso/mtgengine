"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Avalanche extends UnimplementedCard {
  constructor (game) {
    super(game, "Avalanche", "Ice Age", "ICE");
  }
}

module.exports = Avalanche;
