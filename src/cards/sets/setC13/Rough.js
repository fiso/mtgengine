"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Rough extends UnimplementedCard {
  constructor (game) {
    super(game, "Rough", "Commander 2013 Edition", "C13");
  }
}

module.exports = Rough;
