"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SacredPrey extends Card {
  constructor(game) {
    super(game, "Sacred Prey", "Mercadian Masques", "MMQ");
  }
}

module.exports = SacredPrey;
