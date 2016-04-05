"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KozilekButcherofTruth extends UnimplementedCard {
  constructor(game) {
    super(game, "Kozilek, Butcher of Truth", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = KozilekButcherofTruth;
