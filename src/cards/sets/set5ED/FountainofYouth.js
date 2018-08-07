"use strict";
const Constants = require ("../../../Constants");
const FountainofYouthBase = require("../set10E/FountainofYouth");

class FountainofYouth extends FountainofYouthBase {
  constructor (game) {
    super(game, "Fountain of Youth", "Fifth Edition", "5ED");
  }
}

module.exports = FountainofYouth;
