"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarriorenKor extends UnimplementedCard {
  constructor (game) {
    super(game, "Warrior en-Kor", "Tempest Remastered", "TPR");
  }
}

module.exports = WarriorenKor;
