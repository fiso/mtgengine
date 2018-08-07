"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setAKH/Fling");

class Fling extends FlingBase {
  constructor (game) {
    super(game, "Fling", "Planechase 2012", "PC2");
  }
}

module.exports = Fling;
