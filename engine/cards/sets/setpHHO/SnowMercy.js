"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnowMercy extends Card {
  constructor(game) {
    super(game, "Snow Mercy", "Happy Holidays", "pHHO");
  }
}

module.exports = SnowMercy;
