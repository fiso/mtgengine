"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictorysHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Victory's Herald", "Commander 2015", "C15");
  }
}

module.exports = VictorysHerald;
