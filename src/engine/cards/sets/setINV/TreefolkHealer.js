"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreefolkHealer extends UnimplementedCard {
  constructor (game) {
    super(game, "Treefolk Healer", "Invasion", "INV");
  }
}

module.exports = TreefolkHealer;
