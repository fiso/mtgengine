"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KnightWatch extends UnimplementedCard {
  constructor (game) {
    super(game, "Knight Watch", "Gatecrash", "GTC");
  }
}

module.exports = KnightWatch;
