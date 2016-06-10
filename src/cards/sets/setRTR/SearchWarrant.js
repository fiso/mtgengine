"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SearchWarrant extends UnimplementedCard {
  constructor (game) {
    super(game, "Search Warrant", "Return to Ravnica", "RTR");
  }
}

module.exports = SearchWarrant;
