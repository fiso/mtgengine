"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GoblinSpelunkers extends Card {
  constructor(game) {
    super(game, "Goblin Spelunkers", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = GoblinSpelunkers;
