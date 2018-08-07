"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonWarlord extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Warlord", "Masters Edition", "MED");
  }
}

module.exports = KeldonWarlord;
