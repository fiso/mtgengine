"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WashOut extends UnimplementedCard {
  constructor (game) {
    super(game, "Wash Out", "Commander 2013 Edition", "C13");
  }
}

module.exports = WashOut;
