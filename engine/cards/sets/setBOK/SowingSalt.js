"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SowingSalt extends Card {
  constructor(game) {
    super(game, "Sowing Salt", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = SowingSalt;
