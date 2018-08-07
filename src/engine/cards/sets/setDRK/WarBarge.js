"use strict";
const Constants = require ("../../../Constants");
const WarBargeBase = require("../setTSB/WarBarge");

class WarBarge extends WarBargeBase {
  constructor (game) {
    super(game, "War Barge", "The Dark", "DRK");
  }
}

module.exports = WarBarge;
