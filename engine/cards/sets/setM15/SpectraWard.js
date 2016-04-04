"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SpectraWard extends Card {
  constructor(game) {
    super(game, "Spectra Ward", "Magic 2015 Core Set", "M15");
  }
}

module.exports = SpectraWard;
