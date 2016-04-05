"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonWarlord extends UnimplementedCard {
  constructor(game) {
    super(game, "Keldon Warlord", "Collector's Edition", "CED");
  }
}

module.exports = KeldonWarlord;
