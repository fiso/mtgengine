"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TheWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "The Warrior", "Theros Hero's Path", "THP1");
  }
}

module.exports = TheWarrior;
