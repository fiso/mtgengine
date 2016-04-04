"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class KnightWatch extends Card {
  constructor(game) {
    super(game, "Knight Watch", "Gatecrash", "GTC");
  }
}

module.exports = KnightWatch;
