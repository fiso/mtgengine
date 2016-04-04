"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class StaunchHeartedWarrior extends Card {
  constructor(game) {
    super(game, "Staunch-Hearted Warrior", "Theros", "THS");
  }
}

module.exports = StaunchHeartedWarrior;
