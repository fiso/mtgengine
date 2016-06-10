"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Redeem extends UnimplementedCard {
  constructor (game) {
    super(game, "Redeem", "Eighth Edition", "8ED");
  }
}

module.exports = Redeem;
