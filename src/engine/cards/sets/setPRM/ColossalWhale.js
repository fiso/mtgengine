"use strict";
const Constants = require ("../../../Constants");
const ColossalWhaleBase = require("../setM14/ColossalWhale");

class ColossalWhale extends ColossalWhaleBase {
  constructor (game) {
    super(game, "Colossal Whale", "Magic Online Promos", "PRM");
  }
}

module.exports = ColossalWhale;
