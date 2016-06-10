"use strict";
const Constants = require ("../../../Constants");
const BottleGnomesBase = require("../setC14/BottleGnomes");

class BottleGnomes extends BottleGnomesBase {
  constructor (game) {
    super(game, "Bottle Gnomes", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = BottleGnomes;
