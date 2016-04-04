"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CanopyDragon extends Card {
  constructor(game) {
    super(game, "Canopy Dragon", "Mirage", "MIR");
  }
}

module.exports = CanopyDragon;
