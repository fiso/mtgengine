"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BojukaBog extends UnimplementedCard {
  constructor (game) {
    super(game, "Bojuka Bog", "Commander 2013 Edition", "C13");
  }
}

module.exports = BojukaBog;
