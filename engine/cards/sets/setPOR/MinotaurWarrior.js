"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MinotaurWarrior extends UnimplementedCard {
  constructor(game) {
    super(game, "Minotaur Warrior", "Portal", "POR");
  }
}

module.exports = MinotaurWarrior;
