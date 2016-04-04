"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ManaVortex extends Card {
  constructor(game) {
    super(game, "Mana Vortex", "Masters Edition III", "ME3");
  }
}

module.exports = ManaVortex;
