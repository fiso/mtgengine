"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreefolkWarrior extends UnimplementedCard {
  constructor (game) {
    super(game, "Treefolk Warrior", "Magic 2015 Tokens", "TM15");
  }
}

module.exports = TreefolkWarrior;
