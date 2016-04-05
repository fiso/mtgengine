"use strict";
const Constants = require ("../../../Constants");
const SeismicAssaultBase = require("../set8ED/SeismicAssault");

class SeismicAssault extends SeismicAssaultBase {
  constructor(game) {
    super(game, "Seismic Assault", "Tenth Edition", "10E");
  }
}

module.exports = SeismicAssault;
