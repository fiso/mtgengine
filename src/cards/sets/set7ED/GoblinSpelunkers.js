"use strict";
const Constants = require ("../../../Constants");
const GoblinSpelunkersBase = require("../setRAV/GoblinSpelunkers");

class GoblinSpelunkers extends GoblinSpelunkersBase {
  constructor(game) {
    super(game, "Goblin Spelunkers", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinSpelunkers;
