"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LingeringDeath extends Card {
  constructor(game) {
    super(game, "Lingering Death", "Scourge", "SCG");
  }
}

module.exports = LingeringDeath;
