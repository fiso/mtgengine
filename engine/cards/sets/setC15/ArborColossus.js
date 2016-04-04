"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArborColossus extends Card {
  constructor(game) {
    super(game, "Arbor Colossus", "Commander 2015", "C15");
  }
}

module.exports = ArborColossus;
