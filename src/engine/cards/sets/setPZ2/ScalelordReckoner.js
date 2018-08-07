"use strict";
const Constants = require ("../../../Constants");
const ScalelordReckonerBase = require("../setC17/ScalelordReckoner");

class ScalelordReckoner extends ScalelordReckonerBase {
  constructor (game) {
    super(game, "Scalelord Reckoner", "You Make the Cube", "PZ2");
  }
}

module.exports = ScalelordReckoner;
