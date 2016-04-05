"use strict";
const Constants = require ("../../../Constants");
const ShrinkBase = require("../set5ED/Shrink");

class Shrink extends ShrinkBase {
  constructor(game) {
    super(game, "Shrink", "Masters Edition II", "ME2");
  }
}

module.exports = Shrink;
