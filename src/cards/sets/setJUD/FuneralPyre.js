"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FuneralPyre extends UnimplementedCard {
  constructor (game) {
    super(game, "Funeral Pyre", "Judgment", "JUD");
  }
}

module.exports = FuneralPyre;
