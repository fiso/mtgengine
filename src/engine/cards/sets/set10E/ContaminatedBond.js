"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ContaminatedBond extends UnimplementedCard {
  constructor (game) {
    super(game, "Contaminated Bond", "Tenth Edition", "10E");
  }
}

module.exports = ContaminatedBond;
