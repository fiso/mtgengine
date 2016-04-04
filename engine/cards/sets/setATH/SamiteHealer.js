"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SamiteHealer extends Card {
  constructor(game) {
    super(game, "Samite Healer", "Anthologies", "ATH");
  }
}

module.exports = SamiteHealer;
