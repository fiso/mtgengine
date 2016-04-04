"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class InquisitorExarch extends Card {
  constructor(game) {
    super(game, "Inquisitor Exarch", "New Phyrexia", "NPH");
  }
}

module.exports = InquisitorExarch;
