"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setC18/Mountain");

class Mountain extends MountainBase {
  constructor (game) {
    super(game, "Mountain", "Duel Decks Anthology: Elves vs. Goblins", "EVG");
  }
}

module.exports = Mountain;
