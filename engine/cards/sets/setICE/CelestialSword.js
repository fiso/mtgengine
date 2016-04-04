"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CelestialSword extends Card {
  constructor(game) {
    super(game, "Celestial Sword", "Ice Age", "ICE");
  }
}

module.exports = CelestialSword;
