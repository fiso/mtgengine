"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PathtoExile extends UnimplementedCard {
  constructor (game) {
    super(game, "Path to Exile", "Archenemy", "ARC");
  }
}

module.exports = PathtoExile;
