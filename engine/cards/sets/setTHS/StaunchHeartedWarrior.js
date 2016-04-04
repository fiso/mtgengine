"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StaunchHeartedWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Staunch-Hearted Warrior", "Theros", "THS");
  }
}

module.exports = StaunchHeartedWarrior;
