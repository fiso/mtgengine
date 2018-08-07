"use strict";
const Constants = require ("../../../Constants");
const HoldtheLineBase = require("../setDDN/HoldtheLine");

class HoldtheLine extends HoldtheLineBase {
  constructor (game) {
    super(game, "Hold the Line", "Champions of Kamigawa", "CHK");
  }
}

module.exports = HoldtheLine;
