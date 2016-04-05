"use strict";
const Constants = require ("../../../Constants");
const HiddenHorrorBase = require("../set6ED/HiddenHorror");

class HiddenHorror extends HiddenHorrorBase {
  constructor(game) {
    super(game, "Hidden Horror", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = HiddenHorror;
