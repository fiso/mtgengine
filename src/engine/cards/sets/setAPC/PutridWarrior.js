"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PutridWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Putrid Warrior", "Apocalypse", "APC");
  }
}

module.exports = PutridWarrior;
