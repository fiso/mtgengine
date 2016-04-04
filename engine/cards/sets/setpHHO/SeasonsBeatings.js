"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SeasonsBeatings extends Card {
  constructor(game) {
    super(game, "Season's Beatings", "Happy Holidays", "pHHO");
  }
}

module.exports = SeasonsBeatings;
