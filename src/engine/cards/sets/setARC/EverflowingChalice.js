"use strict";
const Constants = require ("../../../Constants");
const EverflowingChaliceBase = require("../setCM2/EverflowingChalice");

class EverflowingChalice extends EverflowingChaliceBase {
  constructor (game) {
    super(game, "Everflowing Chalice", "Archenemy", "ARC");
  }
}

module.exports = EverflowingChalice;
