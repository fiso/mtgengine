"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SunkenCity extends Card {
  constructor(game) {
    super(game, "Sunken City", "Fourth Edition", "4ED");
  }
}

module.exports = SunkenCity;
