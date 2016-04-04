"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MártonStromgald extends UnimplementedCard {
  constructor(game) {
    super(game, "Márton Stromgald", "Ice Age", "ICE");
  }
}

module.exports = MártonStromgald;
