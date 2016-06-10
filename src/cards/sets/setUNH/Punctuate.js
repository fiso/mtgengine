"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Punctuate extends UnimplementedCard {
  constructor (game) {
    super(game, "Punctuate", "Unhinged", "UNH");
  }
}

module.exports = Punctuate;
