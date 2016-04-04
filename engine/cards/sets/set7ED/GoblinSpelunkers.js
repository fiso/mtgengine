"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoblinSpelunkersBase = require("../setRAV/GoblinSpelunkers.js");

class GoblinSpelunkers extends GoblinSpelunkersBase {
  constructor(game) {
    super(game, "Goblin Spelunkers", "Seventh Edition", "7ED");
  }
}

module.exports = GoblinSpelunkers;
