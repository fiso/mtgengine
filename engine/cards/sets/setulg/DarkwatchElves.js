"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DarkwatchElves extends Card {
  constructor(game) {
    super(game, "Darkwatch Elves", "Urza's Legacy", "ULG");
  }
}

module.exports = DarkwatchElves;
