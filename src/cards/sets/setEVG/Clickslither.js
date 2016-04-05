"use strict";
const Constants = require ("../../../Constants");
const ClickslitherBase = require("../setDD3_EVG/Clickslither");

class Clickslither extends ClickslitherBase {
  constructor(game) {
    super(game, "Clickslither", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = Clickslither;
