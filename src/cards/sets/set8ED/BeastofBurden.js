"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BeastofBurden extends UnimplementedCard {
  constructor(game) {
    super(game, "Beast of Burden", "Eighth Edition", "8ED");
  }
}

module.exports = BeastofBurden;
