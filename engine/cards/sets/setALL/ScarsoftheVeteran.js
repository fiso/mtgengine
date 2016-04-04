"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ScarsoftheVeteran extends Card {
  constructor(game) {
    super(game, "Scars of the Veteran", "Alliances", "ALL");
  }
}

module.exports = ScarsoftheVeteran;
