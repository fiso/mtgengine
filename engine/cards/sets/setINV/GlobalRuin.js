"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GlobalRuin extends Card {
  constructor(game) {
    super(game, "Global Ruin", "Invasion", "INV");
  }
}

module.exports = GlobalRuin;
