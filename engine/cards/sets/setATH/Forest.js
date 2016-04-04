"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Forest extends Card {
  constructor(game) {
    super(game, "Forest", "Anthologies", "ATH");
  }
}

module.exports = Forest;
