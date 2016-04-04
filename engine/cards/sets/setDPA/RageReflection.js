"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RageReflection extends Card {
  constructor(game) {
    super(game, "Rage Reflection", "Duels of the Planeswalkers", "DPA");
  }
}

module.exports = RageReflection;
