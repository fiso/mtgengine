"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrashingWumpus extends UnimplementedCard {
  constructor(game) {
    super(game, "Thrashing Wumpus", "Mercadian Masques", "MMQ");
  }
}

module.exports = ThrashingWumpus;
