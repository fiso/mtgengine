"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DromokaWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Dromoka Warrior", "Dragons of Tarkir", "DTK");
  }
}

module.exports = DromokaWarrior;
