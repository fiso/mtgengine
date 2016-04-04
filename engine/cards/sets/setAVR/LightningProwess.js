"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningProwess extends Card {
  constructor(game) {
    super(game, "Lightning Prowess", "Avacyn Restored", "AVR");
  }
}

module.exports = LightningProwess;
