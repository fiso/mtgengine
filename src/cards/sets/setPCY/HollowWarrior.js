"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HollowWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Hollow Warrior", "Prophecy", "PCY");
  }
}

module.exports = HollowWarrior;
