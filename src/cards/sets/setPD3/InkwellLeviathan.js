"use strict";
const Constants = require ("../../../Constants");
const InkwellLeviathanBase = require("../setCON/InkwellLeviathan");

class InkwellLeviathan extends InkwellLeviathanBase {
  constructor (game) {
    super(game, "Inkwell Leviathan", "Premium Deck Series: Graveborn", "PD3");
  }
}

module.exports = InkwellLeviathan;
