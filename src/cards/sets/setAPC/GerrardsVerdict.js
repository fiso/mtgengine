"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GerrardsVerdict extends UnimplementedCard {
  constructor (game) {
    super(game, "Gerrard's Verdict", "Apocalypse", "APC");
  }
}

module.exports = GerrardsVerdict;
