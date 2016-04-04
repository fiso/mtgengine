"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenDemise extends Card {
  constructor(game) {
    super(game, "Sudden Demise", "Commander 2013 Edition", "C13");
  }
}

module.exports = SuddenDemise;
