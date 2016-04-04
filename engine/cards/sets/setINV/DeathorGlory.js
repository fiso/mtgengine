"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DeathorGlory extends Card {
  constructor(game) {
    super(game, "Death or Glory", "Invasion", "INV");
  }
}

module.exports = DeathorGlory;
