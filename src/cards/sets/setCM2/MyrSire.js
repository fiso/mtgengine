"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MyrSire extends UnimplementedCard {
  constructor (game) {
    super(game, "Myr Sire", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = MyrSire;
