"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearchtheCity extends Card {
  constructor(game) {
    super(game, "Search the City", "Return to Ravnica", "RTR");
  }
}

module.exports = SearchtheCity;
