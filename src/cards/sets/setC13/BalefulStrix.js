"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BalefulStrix extends UnimplementedCard {
  constructor (game) {
    super(game, "Baleful Strix", "Commander 2013 Edition", "C13");
  }
}

module.exports = BalefulStrix;
