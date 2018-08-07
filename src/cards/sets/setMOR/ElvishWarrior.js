"use strict";
const Constants = require ("../../../Constants");
const ElvishWarriorBase = require("../setEVG/ElvishWarrior");

class ElvishWarrior extends ElvishWarriorBase {
  constructor (game) {
    super(game, "Elvish Warrior", "Morningtide", "MOR");
  }
}

module.exports = ElvishWarrior;
