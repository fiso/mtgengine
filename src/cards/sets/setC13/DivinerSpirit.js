"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DivinerSpirit extends UnimplementedCard {
  constructor(game) {
    super(game, "Diviner Spirit", "Commander 2013 Edition", "C13");
  }
}

module.exports = DivinerSpirit;
