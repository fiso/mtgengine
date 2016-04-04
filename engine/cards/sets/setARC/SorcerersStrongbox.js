"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SorcerersStrongbox extends Card {
  constructor(game) {
    super(game, "Sorcerer's Strongbox", "Archenemy", "ARC");
  }
}

module.exports = SorcerersStrongbox;
