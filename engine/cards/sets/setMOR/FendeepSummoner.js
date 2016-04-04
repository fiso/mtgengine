"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FendeepSummoner extends UnimplementedCard {
  constructor(game) {
    super(game, "Fendeep Summoner", "Morningtide", "MOR");
  }
}

module.exports = FendeepSummoner;
