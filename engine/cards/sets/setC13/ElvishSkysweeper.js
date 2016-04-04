"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ElvishSkysweeper extends Card {
  constructor(game) {
    super(game, "Elvish Skysweeper", "Commander 2013 Edition", "C13");
  }
}

module.exports = ElvishSkysweeper;
