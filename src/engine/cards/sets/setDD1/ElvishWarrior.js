"use strict";
const Constants = require ("../../../Constants");
const ElvishWarriorBase = require("../setEVG/ElvishWarrior");

class ElvishWarrior extends ElvishWarriorBase {
  constructor (game) {
    super(game, "Elvish Warrior", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = ElvishWarrior;
