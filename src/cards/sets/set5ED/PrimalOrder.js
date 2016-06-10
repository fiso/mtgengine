"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PrimalOrder extends UnimplementedCard {
  constructor (game) {
    super(game, "Primal Order", "Fifth Edition", "5ED");
  }
}

module.exports = PrimalOrder;
