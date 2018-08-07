"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class JadeStatue extends UnimplementedCard {
  constructor (game) {
    super(game, "Jade Statue", "Ninth Edition", "9ED");
  }
}

module.exports = JadeStatue;
