"use strict";
const Constants = require ("../../../Constants");
const OpalPalaceBase = require("../setCM2/OpalPalace");

class OpalPalace extends OpalPalaceBase {
  constructor (game) {
    super(game, "Opal Palace", "Commander Anthology", "CMA");
  }
}

module.exports = OpalPalace;
