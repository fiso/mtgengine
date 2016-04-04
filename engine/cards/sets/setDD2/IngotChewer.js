"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const IngotChewerBase = require("../setC14/IngotChewer.js");

class IngotChewer extends IngotChewerBase {
  constructor(game) {
    super(game, "Ingot Chewer", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = IngotChewer;
