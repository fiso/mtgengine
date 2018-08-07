"use strict";
const Constants = require ("../../../Constants");
const NekusartheMindrazerBase = require("../setJ14/NekusartheMindrazer");

class NekusartheMindrazer extends NekusartheMindrazerBase {
  constructor (game) {
    super(game, "Nekusar, the Mindrazer", "Magic Online Promos", "PRM");
  }
}

module.exports = NekusartheMindrazer;
