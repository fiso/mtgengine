"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WhitesunsPassage extends Card {
  constructor(game) {
    super(game, "Whitesun's Passage", "Scars of Mirrodin", "SOM");
  }
}

module.exports = WhitesunsPassage;
