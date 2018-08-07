"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanVampire extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Vampire", "Masters Edition II", "ME2");
  }
}

module.exports = KrovikanVampire;
