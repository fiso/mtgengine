"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FendeepSummoner extends Card {
  constructor(game) {
    super(game, "Fendeep Summoner", "Morningtide", "MOR");
  }
}

module.exports = FendeepSummoner;
