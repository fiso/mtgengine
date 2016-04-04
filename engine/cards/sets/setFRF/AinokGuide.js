"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AinokGuide extends Card {
  constructor(game) {
    super(game, "Ainok Guide", "Fate Reforged", "FRF");
  }
}

module.exports = AinokGuide;
