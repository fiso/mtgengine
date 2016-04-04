"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunClaspBase = require("../setBRB/SunClasp.js");

class SunClasp extends SunClaspBase {
  constructor(game) {
    super(game, "Sun Clasp", "Visions", "VIS");
  }
}

module.exports = SunClasp;
