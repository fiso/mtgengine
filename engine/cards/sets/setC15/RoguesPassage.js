"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RoguesPassage extends Card {
  constructor(game) {
    super(game, "Rogue's Passage", "Commander 2015", "C15");
  }
}

module.exports = RoguesPassage;
