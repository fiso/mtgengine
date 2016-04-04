"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SeismicAssaultBase = require("../set8ED/SeismicAssault.js");

class SeismicAssault extends SeismicAssaultBase {
  constructor(game) {
    super(game, "Seismic Assault", "Exodus", "EXO");
  }
}

module.exports = SeismicAssault;
