"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BowerPassage extends Card {
  constructor(game) {
    super(game, "Bower Passage", "Avacyn Restored", "AVR");
  }
}

module.exports = BowerPassage;
