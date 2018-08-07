"use strict";
const Constants = require ("../../../Constants");
const BoggartBruteBase = require("../setM19/BoggartBrute");

class BoggartBrute extends BoggartBruteBase {
  constructor (game) {
    super(game, "Boggart Brute", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = BoggartBrute;
