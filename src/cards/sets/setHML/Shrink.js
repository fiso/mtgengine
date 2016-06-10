"use strict";
const Constants = require ("../../../Constants");
const ShrinkBase = require("../set5ED/Shrink");

class Shrink extends ShrinkBase {
  constructor (game) {
    super(game, "Shrink", "Homelands", "HML");
  }
}

module.exports = Shrink;
