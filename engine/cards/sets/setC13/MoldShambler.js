"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MoldShambler extends Card {
  constructor(game) {
    super(game, "Mold Shambler", "Commander 2013 Edition", "C13");
  }
}

module.exports = MoldShambler;
