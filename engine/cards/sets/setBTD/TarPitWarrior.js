"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TarPitWarrior extends Card {
  constructor(game) {
    super(game, "Tar Pit Warrior", "Beatdown Box Set", "BTD");
  }
}

module.exports = TarPitWarrior;
