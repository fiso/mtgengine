"use strict";
const Constants = require ("../../../Constants");
const SeismicAssaultBase = require("../set8ED/SeismicAssault");

class SeismicAssault extends SeismicAssaultBase {
  constructor (game) {
    super(game, "Seismic Assault", "Seventh Edition", "7ED");
  }
}

module.exports = SeismicAssault;
