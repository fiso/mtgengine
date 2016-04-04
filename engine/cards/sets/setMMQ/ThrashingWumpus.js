"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrashingWumpus extends Card {
  constructor(game) {
    super(game, "Thrashing Wumpus", "Mercadian Masques", "MMQ");
  }
}

module.exports = ThrashingWumpus;
