"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningReaver extends Card {
  constructor(game) {
    super(game, "Lightning Reaver", "Alara Reborn", "ARB");
  }
}

module.exports = LightningReaver;
