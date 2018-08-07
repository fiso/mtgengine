"use strict";
const Constants = require ("../../../Constants");
const TarPitcherBase = require("../setEVG/TarPitcher");

class TarPitcher extends TarPitcherBase {
  constructor (game) {
    super(game, "Tar Pitcher", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = TarPitcher;
