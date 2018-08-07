"use strict";
const Constants = require ("../../../Constants");
const FlingBase = require("../setAKH/Fling");

class Fling extends FlingBase {
  constructor (game) {
    super(game, "Fling", "Arena League 2001", "PAL01");
  }
}

module.exports = Fling;
