"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpectraWard extends UnimplementedCard {
  constructor (game) {
    super(game, "Spectra Ward", "Magic 2015", "M15");
  }
}

module.exports = SpectraWard;
