"use strict";
const Constants = require ("../../../Constants");
const MarshFlatsBase = require("../setZEN/MarshFlats");

class MarshFlats extends MarshFlatsBase {
  constructor(game) {
    super(game, "Marsh Flats", "Zendikar Expedition", "EXP");
  }
}

module.exports = MarshFlats;
