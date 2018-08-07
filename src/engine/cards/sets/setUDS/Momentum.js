"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Momentum extends UnimplementedCard {
  constructor (game) {
    super(game, "Momentum", "Urza's Destiny", "UDS");
  }
}

module.exports = Momentum;
