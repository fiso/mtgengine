"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PrimalVigor extends Card {
  constructor(game) {
    super(game, "Primal Vigor", "Commander 2013 Edition", "C13");
  }
}

module.exports = PrimalVigor;
