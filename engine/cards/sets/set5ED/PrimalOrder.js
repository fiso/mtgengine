"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalOrder extends Card {
  constructor(game) {
    super(game, "Primal Order", "Fifth Edition", "5ED");
  }
}

module.exports = PrimalOrder;
