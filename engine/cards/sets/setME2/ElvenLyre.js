"use strict";
const Constants = require ("../../../Constants");
const ElvenLyreBase = require("../setFEM/ElvenLyre");

class ElvenLyre extends ElvenLyreBase {
  constructor(game) {
    super(game, "Elven Lyre", "Masters Edition II", "ME2");
  }
}

module.exports = ElvenLyre;
