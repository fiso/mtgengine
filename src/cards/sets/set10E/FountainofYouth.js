"use strict";
const Constants = require ("../../../Constants");
const FountainofYouthBase = require("../setCHR/FountainofYouth");

class FountainofYouth extends FountainofYouthBase {
  constructor (game) {
    super(game, "Fountain of Youth", "Tenth Edition", "10E");
  }
}

module.exports = FountainofYouth;
