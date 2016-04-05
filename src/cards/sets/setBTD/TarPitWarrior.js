"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TarPitWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Tar Pit Warrior", "Beatdown Box Set", "BTD");
  }
}

module.exports = TarPitWarrior;
