"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningAxe extends Card {
  constructor(game) {
    super(game, "Lightning Axe", "Shadows over Innistrad", "SOI");
  }
}

module.exports = LightningAxe;
