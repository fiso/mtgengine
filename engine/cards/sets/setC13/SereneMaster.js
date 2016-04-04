"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SereneMaster extends Card {
  constructor(game) {
    super(game, "Serene Master", "Commander 2013 Edition", "C13");
  }
}

module.exports = SereneMaster;
