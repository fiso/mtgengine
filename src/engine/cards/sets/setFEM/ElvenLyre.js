"use strict";
const Constants = require ("../../../Constants");
const ElvenLyreBase = require("../setME2/ElvenLyre");

class ElvenLyre extends ElvenLyreBase {
  constructor (game) {
    super(game, "Elven Lyre", "Fallen Empires", "FEM");
  }
}

module.exports = ElvenLyre;
