"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SearchWarrant extends Card {
  constructor(game) {
    super(game, "Search Warrant", "Return to Ravnica", "RTR");
  }
}

module.exports = SearchWarrant;
