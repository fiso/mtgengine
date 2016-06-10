"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../set6ED/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = MarbleDiamond;
