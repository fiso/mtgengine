"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HoodedHorror extends UnimplementedCard {
  constructor (game) {
    super(game, "Hooded Horror", "Commander 2013 Edition", "C13");
  }
}

module.exports = HoodedHorror;
