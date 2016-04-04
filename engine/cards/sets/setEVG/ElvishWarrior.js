"use strict";
const Constants = require ("../../../Constants");
const ElvishWarriorBase = require("../setDD3_EVG/ElvishWarrior");

class ElvishWarrior extends ElvishWarriorBase {
  constructor(game) {
    super(game, "Elvish Warrior", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = ElvishWarrior;
