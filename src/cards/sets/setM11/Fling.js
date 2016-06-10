"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setpARL/Fling");

class Fling extends FlingBase {
  constructor (game) {
    super(game, "Fling", "Magic 2011", "M11");
  }
}

module.exports = Fling;
