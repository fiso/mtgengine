"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SandstoneWarrior extends Card {
  constructor(game) {
    super(game, "Sandstone Warrior", "Ninth Edition", "9ED");
  }
}

module.exports = SandstoneWarrior;
