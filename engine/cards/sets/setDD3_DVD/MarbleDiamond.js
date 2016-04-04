"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MarbleDiamondBase = require("../set6ED/MarbleDiamond.js");

class MarbleDiamond extends MarbleDiamondBase {
  constructor(game) {
    super(game, "Marble Diamond", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = MarbleDiamond;
