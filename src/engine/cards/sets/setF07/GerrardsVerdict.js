"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsVerdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Verdict", "Friday Night Magic 2007", "F07");
  }
}

module.exports = GerrardsVerdict;
