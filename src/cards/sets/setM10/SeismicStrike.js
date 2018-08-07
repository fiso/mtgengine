"use strict";
const Constants = require ("../../../Constants");
const SeismicStrikeBase = require("../setM15/SeismicStrike");

class SeismicStrike extends SeismicStrikeBase {
  constructor (game) {
    super(game, "Seismic Strike", "Magic 2010", "M10");
  }
}

module.exports = SeismicStrike;
