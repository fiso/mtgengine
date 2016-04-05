"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ChaosLord extends UnimplementedCard {
  constructor(game) {
    super(game, "Chaos Lord", "Ice Age", "ICE");
  }
}

module.exports = ChaosLord;
