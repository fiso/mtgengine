"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MaulfistDoorbuster extends UnimplementedCard {
  constructor (game) {
    super(game, "Maulfist Doorbuster", "Kaladesh", "KLD");
  }
}

module.exports = MaulfistDoorbuster;
