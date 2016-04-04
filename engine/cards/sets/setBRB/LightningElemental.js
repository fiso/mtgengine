"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningElemental extends Card {
  constructor(game) {
    super(game, "Lightning Elemental", "Battle Royale Box Set", "BRB");
  }
}

module.exports = LightningElemental;
