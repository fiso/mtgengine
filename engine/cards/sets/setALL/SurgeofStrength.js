"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SurgeofStrength extends Card {
  constructor(game) {
    super(game, "Surge of Strength", "Alliances", "ALL");
  }
}

module.exports = SurgeofStrength;
