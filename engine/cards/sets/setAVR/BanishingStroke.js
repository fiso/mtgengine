"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BanishingStroke extends Card {
  constructor(game) {
    super(game, "Banishing Stroke", "Avacyn Restored", "AVR");
  }
}

module.exports = BanishingStroke;
