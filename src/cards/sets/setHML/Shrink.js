"use strict";
const Constants = require ("../../../Constants");
const ShrinkBase = require("../setME2/Shrink");

class Shrink extends ShrinkBase {
  constructor (game) {
    super(game, "Shrink", "Homelands", "HML");
  }
}

module.exports = Shrink;
