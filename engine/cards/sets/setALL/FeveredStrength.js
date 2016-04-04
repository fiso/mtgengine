"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FeveredStrength extends Card {
  constructor(game) {
    super(game, "Fevered Strength", "Alliances", "ALL");
  }
}

module.exports = FeveredStrength;
