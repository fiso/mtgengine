"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WarrenPilferers extends Card {
  constructor(game) {
    super(game, "Warren Pilferers", "Lorwyn", "LRW");
  }
}

module.exports = WarrenPilferers;
