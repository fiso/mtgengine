"use strict";
const Constants = require ("../../../Constants");
const HowlingFuryBase = require("../setS99/HowlingFury");

class HowlingFury extends HowlingFuryBase {
  constructor (game) {
    super(game, "Howling Fury", "Portal", "POR");
  }
}

module.exports = HowlingFury;
