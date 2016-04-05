"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Zap extends UnimplementedCard {
  constructor(game) {
    super(game, "Zap", "Invasion", "INV");
  }
}

module.exports = Zap;
