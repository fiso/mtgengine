"use strict";
const Constants = require ("../../../Constants");
const MartyrofFrostBase = require("../setCSP/MartyrofFrost");

class MartyrofFrost extends MartyrofFrostBase {
  constructor(game) {
    super(game, "Martyr of Frost", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = MartyrofFrost;
