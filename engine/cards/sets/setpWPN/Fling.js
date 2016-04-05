"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setpARL/Fling");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "WPN and Gateway", "pWPN");
  }
}

module.exports = Fling;
