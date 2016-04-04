"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FlamerushRiderBase = require("../setFRF/FlamerushRider.js");

class FlamerushRider extends FlamerushRiderBase {
  constructor(game) {
    super(game, "Flamerush Rider", "Media Inserts", "pMEI");
  }
}

module.exports = FlamerushRider;
