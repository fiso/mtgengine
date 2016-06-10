"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MirriCatWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Mirri, Cat Warrior", "Anthologies", "ATH");
  }
}

module.exports = MirriCatWarrior;
