"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RogueElephant extends Card {
  constructor(game) {
    super(game, "Rogue Elephant", "Weatherlight", "WTH");
  }
}

module.exports = RogueElephant;
