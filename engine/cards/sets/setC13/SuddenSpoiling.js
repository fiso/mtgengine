"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SuddenSpoiling extends Card {
  constructor(game) {
    super(game, "Sudden Spoiling", "Commander 2013 Edition", "C13");
  }
}

module.exports = SuddenSpoiling;
