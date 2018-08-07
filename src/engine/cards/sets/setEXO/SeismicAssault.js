"use strict";
const Constants = require ("../../../Constants");
const SeismicAssaultBase = require("../set10E/SeismicAssault");

class SeismicAssault extends SeismicAssaultBase {
  constructor (game) {
    super(game, "Seismic Assault", "Exodus", "EXO");
  }
}

module.exports = SeismicAssault;
