"use strict";
const Constants = require ("../../../Constants");
const ProwlingPangolinBase = require("../setEMA/ProwlingPangolin");

class ProwlingPangolin extends ProwlingPangolinBase {
  constructor (game) {
    super(game, "Prowling Pangolin", "Onslaught", "ONS");
  }
}

module.exports = ProwlingPangolin;
