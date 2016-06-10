"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastDitchEffort extends UnimplementedCard {
  constructor (game) {
    super(game, "Last-Ditch Effort", "Urza's Legacy", "ULG");
  }
}

module.exports = LastDitchEffort;
