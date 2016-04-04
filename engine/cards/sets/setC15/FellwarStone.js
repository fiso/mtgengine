"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FellwarStone extends Card {
  constructor(game) {
    super(game, "Fellwar Stone", "Commander 2015", "C15");
  }
}

module.exports = FellwarStone;
