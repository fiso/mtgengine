"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LightningJavelin extends Card {
  constructor(game) {
    super(game, "Lightning Javelin", "Magic Origins", "ORI");
  }
}

module.exports = LightningJavelin;
