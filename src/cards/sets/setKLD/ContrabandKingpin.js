"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContrabandKingpin extends UnimplementedCard {
  constructor (game) {
    super(game, "Contraband Kingpin", "Kaladesh", "KLD");
  }
}

module.exports = ContrabandKingpin;
