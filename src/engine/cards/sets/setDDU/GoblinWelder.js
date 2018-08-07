"use strict";
const Constants = require ("../../../Constants");
const GoblinWelderBase = require("../setCM2/GoblinWelder");

class GoblinWelder extends GoblinWelderBase {
  constructor (game) {
    super(game, "Goblin Welder", "Duel Decks: Elves vs. Inventors", "DDU");
  }
}

module.exports = GoblinWelder;
