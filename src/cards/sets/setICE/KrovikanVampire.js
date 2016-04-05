"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanVampire extends UnimplementedCard {
  constructor(game) {
    super(game, "Krovikan Vampire", "Ice Age", "ICE");
  }
}

module.exports = KrovikanVampire;
