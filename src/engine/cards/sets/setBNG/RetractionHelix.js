"use strict";
const Constants = require ("../../../Constants");
const RetractionHelixBase = require("../setA25/RetractionHelix");

class RetractionHelix extends RetractionHelixBase {
  constructor (game) {
    super(game, "Retraction Helix", "Born of the Gods", "BNG");
  }
}

module.exports = RetractionHelix;
