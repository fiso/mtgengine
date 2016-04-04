"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Famine extends UnimplementedCard {
  constructor(game) {
    super(game, "Famine", "Commander 2013 Edition", "C13");
  }
}

module.exports = Famine;
