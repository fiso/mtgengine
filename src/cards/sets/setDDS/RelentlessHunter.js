"use strict";
const Constants = require ("../../../Constants");
const RelentlessHunterBase = require("../setBBD/RelentlessHunter");

class RelentlessHunter extends RelentlessHunterBase {
  constructor (game) {
    super(game, "Relentless Hunter", "Duel Decks: Mind vs. Might", "DDS");
  }
}

module.exports = RelentlessHunter;
