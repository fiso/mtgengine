"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SuddenDemise extends UnimplementedCard {
  constructor (game) {
    super(game, "Sudden Demise", "Commander 2013 Edition", "C13");
  }
}

module.exports = SuddenDemise;
