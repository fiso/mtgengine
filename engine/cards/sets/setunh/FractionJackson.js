"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FractionJackson extends Card {
  constructor(game) {
    super(game, "Fraction Jackson", "Unhinged", "UNH");
  }
}

module.exports = FractionJackson;
