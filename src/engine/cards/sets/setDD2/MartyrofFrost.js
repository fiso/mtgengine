"use strict";
const Constants = require ("../../../Constants");
const MartyrofFrostBase = require("../setJVC/MartyrofFrost");

class MartyrofFrost extends MartyrofFrostBase {
  constructor (game) {
    super(game, "Martyr of Frost", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = MartyrofFrost;
