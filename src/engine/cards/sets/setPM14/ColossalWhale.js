"use strict";
const Constants = require ("../../../Constants");
const ColossalWhaleBase = require("../setM14/ColossalWhale");

class ColossalWhale extends ColossalWhaleBase {
  constructor (game) {
    super(game, "Colossal Whale", "Magic 2014 Promos", "PM14");
  }
}

module.exports = ColossalWhale;
