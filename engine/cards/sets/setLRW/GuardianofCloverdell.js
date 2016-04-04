"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GuardianofCloverdell extends Card {
  constructor(game) {
    super(game, "Guardian of Cloverdell", "Lorwyn", "LRW");
  }
}

module.exports = GuardianofCloverdell;
