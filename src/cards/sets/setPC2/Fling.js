"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setpARL/Fling");

class Fling extends FlingBase {
  constructor(game) {
    super(game, "Fling", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = Fling;
