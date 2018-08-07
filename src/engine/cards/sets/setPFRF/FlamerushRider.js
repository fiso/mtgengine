"use strict";
const Constants = require ("../../../Constants");
const FlamerushRiderBase = require("../setFRF/FlamerushRider");

class FlamerushRider extends FlamerushRiderBase {
  constructor (game) {
    super(game, "Flamerush Rider", "Fate Reforged Promos", "PFRF");
  }
}

module.exports = FlamerushRider;
