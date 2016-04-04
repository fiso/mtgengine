"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Naughty extends UnimplementedCard {
  constructor(game) {
    super(game, "Naughty", "Happy Holidays", "pHHO");
  }
}

module.exports = Naughty;
