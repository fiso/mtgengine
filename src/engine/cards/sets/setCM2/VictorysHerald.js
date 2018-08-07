"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VictorysHerald extends UnimplementedCard {
  constructor (game) {
    super(game, "Victory's Herald", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = VictorysHerald;
