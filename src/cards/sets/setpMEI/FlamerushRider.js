"use strict";
const Constants = require ("../../../Constants");
const FlamerushRiderBase = require("../setFRF/FlamerushRider");

class FlamerushRider extends FlamerushRiderBase {
  constructor (game) {
    super(game, "Flamerush Rider", "Media Inserts", "pMEI");
  }
}

module.exports = FlamerushRider;
