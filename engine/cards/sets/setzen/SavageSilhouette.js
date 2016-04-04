"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SavageSilhouette extends Card {
  constructor(game) {
    super(game, "Savage Silhouette", "Zendikar", "ZEN");
  }
}

module.exports = SavageSilhouette;
