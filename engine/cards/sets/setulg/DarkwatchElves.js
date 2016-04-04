"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkwatchElves extends UnimplementedCard {
  constructor(game) {
    super(game, "Darkwatch Elves", "Urza's Legacy", "ULG");
  }
}

module.exports = DarkwatchElves;
