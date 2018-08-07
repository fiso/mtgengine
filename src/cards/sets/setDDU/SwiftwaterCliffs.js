"use strict";
const Constants = require ("../../../Constants");
const SwiftwaterCliffsBase = require("../setC18/SwiftwaterCliffs");

class SwiftwaterCliffs extends SwiftwaterCliffsBase {
  constructor (game) {
    super(game, "Swiftwater Cliffs", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = SwiftwaterCliffs;
