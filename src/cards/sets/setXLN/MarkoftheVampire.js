"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MarkoftheVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Mark of the Vampire", "Ixalan", "XLN");
  }
}

module.exports = MarkoftheVampire;
