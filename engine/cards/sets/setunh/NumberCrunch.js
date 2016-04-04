"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NumberCrunch extends Card {
  constructor(game) {
    super(game, "Number Crunch", "Unhinged", "UNH");
  }
}

module.exports = NumberCrunch;
