"use strict";
const Constants = require ("../../../Constants");
const SunClaspBase = require("../setBRB/SunClasp");

class SunClasp extends SunClaspBase {
  constructor (game) {
    super(game, "Sun Clasp", "Visions", "VIS");
  }
}

module.exports = SunClasp;
