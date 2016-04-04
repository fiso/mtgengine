"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CaveSense extends Card {
  constructor(game) {
    super(game, "Cave Sense", "Mercadian Masques", "MMQ");
  }
}

module.exports = CaveSense;
