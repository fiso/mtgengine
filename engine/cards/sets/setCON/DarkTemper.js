"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkTemper extends Card {
  constructor(game) {
    super(game, "Dark Temper", "Conflux", "CON");
  }
}

module.exports = DarkTemper;
