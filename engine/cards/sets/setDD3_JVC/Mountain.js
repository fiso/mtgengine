"use strict";
const Constants = require ("../../../Constants");
const MountainBase = require("../setATH/Mountain");

class Mountain extends MountainBase {
  constructor(game) {
    super(game, "Mountain", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = Mountain;
