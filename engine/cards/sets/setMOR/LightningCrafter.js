"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningCrafter extends Card {
  constructor(game) {
    super(game, "Lightning Crafter", "Morningtide", "MOR");
  }
}

module.exports = LightningCrafter;
