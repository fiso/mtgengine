"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningShrieker extends Card {
  constructor(game) {
    super(game, "Lightning Shrieker", "Fate Reforged", "FRF");
  }
}

module.exports = LightningShrieker;
