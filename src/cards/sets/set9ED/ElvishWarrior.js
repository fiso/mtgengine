"use strict";
const Constants = require ("../../../Constants");
const ElvishWarriorBase = require("../setEVG/ElvishWarrior");

class ElvishWarrior extends ElvishWarriorBase {
  constructor (game) {
    super(game, "Elvish Warrior", "Ninth Edition", "9ED");
  }
}

module.exports = ElvishWarrior;
