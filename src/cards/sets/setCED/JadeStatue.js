"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Statue", "Collector's Edition", "CED");
  }
}

module.exports = JadeStatue;
