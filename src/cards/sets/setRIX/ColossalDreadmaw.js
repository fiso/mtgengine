"use strict";
const Constants = require ("../../../Constants");
const ColossalDreadmawBase = require("../setM19/ColossalDreadmaw");

class ColossalDreadmaw extends ColossalDreadmawBase {
  constructor (game) {
    super(game, "Colossal Dreadmaw", "Rivals of Ixalan", "RIX");
  }
}

module.exports = ColossalDreadmaw;
