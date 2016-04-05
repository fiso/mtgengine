"use strict";
const Constants = require ("../../../Constants");
const QuicksilverDragonBase = require("../setDD3_JVC/QuicksilverDragon");

class QuicksilverDragon extends QuicksilverDragonBase {
  constructor(game) {
    super(game, "Quicksilver Dragon", "Duel Decks: Jace vs. Chandra", "DD2");
  }
}

module.exports = QuicksilverDragon;
