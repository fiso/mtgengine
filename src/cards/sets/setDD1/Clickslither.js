"use strict";
const Constants = require ("../../../Constants");
const ClickslitherBase = require("../setEVG/Clickslither");

class Clickslither extends ClickslitherBase {
  constructor (game) {
    super(game, "Clickslither", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = Clickslither;
