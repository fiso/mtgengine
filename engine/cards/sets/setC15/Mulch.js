"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Mulch extends Card {
  constructor(game) {
    super(game, "Mulch", "Commander 2015", "C15");
  }
}

module.exports = Mulch;
