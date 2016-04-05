"use strict";
const Constants = require ("../../../Constants");
const TarPitcherBase = require("../setDD3_EVG/TarPitcher");

class TarPitcher extends TarPitcherBase {
  constructor(game) {
    super(game, "Tar Pitcher", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = TarPitcher;
