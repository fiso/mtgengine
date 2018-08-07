"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OldFashionedVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Old-Fashioned Vampire", "Unstable", "UST");
  }
}

module.exports = OldFashionedVampire;
