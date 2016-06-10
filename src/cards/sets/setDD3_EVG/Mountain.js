"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Duel Decks Anthology, Elves vs. Goblins", "DD3_EVG");
  }
}

module.exports = Mountain;
