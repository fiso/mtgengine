"use strict";
const Constants = require ("../../../Constants");
const MarshFlatsBase = require("../setMM3/MarshFlats");

class MarshFlats extends MarshFlatsBase {
  constructor (game) {
    super(game, "Marsh Flats", "Zendikar", "ZEN");
  }
}

module.exports = MarshFlats;
