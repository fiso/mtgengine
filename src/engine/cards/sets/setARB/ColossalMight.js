"use strict";
const Constants = require ("../../../Constants");
const ColossalMightBase = require("../setCMD/ColossalMight");

class ColossalMight extends ColossalMightBase {
  constructor (game) {
    super(game, "Colossal Might", "Alara Reborn", "ARB");
  }
}

module.exports = ColossalMight;
