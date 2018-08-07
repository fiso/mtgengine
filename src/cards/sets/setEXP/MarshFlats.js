"use strict";
const Constants = require ("../../../Constants");
const MarshFlatsBase = require("../setMM3/MarshFlats");

class MarshFlats extends MarshFlatsBase {
  constructor (game) {
    super(game, "Marsh Flats", "Zendikar Expeditions", "EXP");
  }
}

module.exports = MarshFlats;
