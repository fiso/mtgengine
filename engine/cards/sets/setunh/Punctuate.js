"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Punctuate extends Card {
  constructor(game) {
    super(game, "Punctuate", "Unhinged", "UNH");
  }
}

module.exports = Punctuate;
