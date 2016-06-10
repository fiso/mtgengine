"use strict";
const Constants = require ("../../../Constants");
const FountainofYouthBase = require("../setCHR/FountainofYouth");

class FountainofYouth extends FountainofYouthBase {
  constructor (game) {
    super(game, "Fountain of Youth", "Fifth Edition", "5ED");
  }
}

module.exports = FountainofYouth;
