"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class VerdantCatacombs extends Card {
  constructor(game) {
    super(game, "Verdant Catacombs", "Zendikar", "ZEN");
  }
}

module.exports = VerdantCatacombs;
