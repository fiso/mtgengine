"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GruulSignet extends Card {
  constructor(game) {
    super(game, "Gruul Signet", "Archenemy", "ARC");
  }
}

module.exports = GruulSignet;
