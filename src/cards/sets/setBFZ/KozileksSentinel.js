"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozileksSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Kozilek's Sentinel", "Battle for Zendikar", "BFZ");
  }
}

module.exports = KozileksSentinel;
