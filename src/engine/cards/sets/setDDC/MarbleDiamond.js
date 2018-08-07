"use strict";
const Constants = require ("../../../Constants");
const MarbleDiamondBase = require("../setDVD/MarbleDiamond");

class MarbleDiamond extends MarbleDiamondBase {
  constructor (game) {
    super(game, "Marble Diamond", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = MarbleDiamond;
