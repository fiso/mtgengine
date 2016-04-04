"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DestroytheEvidence extends Card {
  constructor(game) {
    super(game, "Destroy the Evidence", "Return to Ravnica", "RTR");
  }
}

module.exports = DestroytheEvidence;
