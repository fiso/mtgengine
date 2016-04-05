"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EternalWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Eternal Warrior", "Fifth Edition", "5ED");
  }
}

module.exports = EternalWarrior;
