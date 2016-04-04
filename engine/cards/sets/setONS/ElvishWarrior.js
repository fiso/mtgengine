"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ElvishWarriorBase = require("../setDD3_EVG/ElvishWarrior.js");

class ElvishWarrior extends ElvishWarriorBase {
  constructor(game) {
    super(game, "Elvish Warrior", "Onslaught", "ONS");
  }
}

module.exports = ElvishWarrior;
