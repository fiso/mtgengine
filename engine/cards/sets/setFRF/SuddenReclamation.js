"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenReclamation extends Card {
  constructor(game) {
    super(game, "Sudden Reclamation", "Fate Reforged", "FRF");
  }
}

module.exports = SuddenReclamation;
