"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Phthisis extends UnimplementedCard {
  constructor(game) {
    super(game, "Phthisis", "Commander 2013 Edition", "C13");
  }
}

module.exports = Phthisis;
