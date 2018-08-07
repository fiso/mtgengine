"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearchtheCity extends UnimplementedCard {
  constructor (game) {
    super(game, "Search the City", "Return to Ravnica", "RTR");
  }
}

module.exports = SearchtheCity;
