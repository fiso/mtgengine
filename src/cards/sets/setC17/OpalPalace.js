"use strict";
const Constants = require ("../../../Constants");
const OpalPalaceBase = require("../setCM2/OpalPalace");

class OpalPalace extends OpalPalaceBase {
  constructor (game) {
    super(game, "Opal Palace", "Commander 2017", "C17");
  }
}

module.exports = OpalPalace;
