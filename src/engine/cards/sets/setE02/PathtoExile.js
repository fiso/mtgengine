"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PathtoExile extends UnimplementedCard {
  constructor (game) {
    super(game, "Path to Exile", "Explorers of Ixalan", "E02");
  }
}

module.exports = PathtoExile;
