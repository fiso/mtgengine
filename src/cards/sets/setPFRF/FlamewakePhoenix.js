"use strict";
const Constants = require ("../../../Constants");
const FlamewakePhoenixBase = require("../setFRF/FlamewakePhoenix");

class FlamewakePhoenix extends FlamewakePhoenixBase {
  constructor (game) {
    super(game, "Flamewake Phoenix", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = FlamewakePhoenix;
