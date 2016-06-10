"use strict";
const Constants = require ("../../../Constants");
const ColossalWhaleBase = require("../setpLPA/ColossalWhale");

class ColossalWhale extends ColossalWhaleBase {
  constructor (game) {
    super(game, "Colossal Whale", "Magic 2014 Core Set", "M14");
  }
}

module.exports = ColossalWhale;
