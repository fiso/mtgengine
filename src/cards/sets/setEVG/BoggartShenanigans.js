"use strict";
const Constants = require ("../../../Constants");
const BoggartShenanigansBase = require("../setDD3_EVG/BoggartShenanigans");

class BoggartShenanigans extends BoggartShenanigansBase {
  constructor (game) {
    super(game, "Boggart Shenanigans", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = BoggartShenanigans;
