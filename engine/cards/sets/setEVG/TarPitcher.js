"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TarPitcherBase = require("../setDD3_EVG/TarPitcher.js");

class TarPitcher extends TarPitcherBase {
  constructor(game) {
    super(game, "Tar Pitcher", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = TarPitcher;
