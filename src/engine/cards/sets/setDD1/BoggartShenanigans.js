"use strict";
const Constants = require ("../../../Constants");
const BoggartShenanigansBase = require("../setEVG/BoggartShenanigans");

class BoggartShenanigans extends BoggartShenanigansBase {
  constructor (game) {
    super(game, "Boggart Shenanigans", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = BoggartShenanigans;
