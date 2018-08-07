"use strict";
const Constants = require ("../../../Constants");
const SoulKissBase = require("../setME2/SoulKiss");

class SoulKiss extends SoulKissBase {
  constructor (game) {
    super(game, "Soul Kiss", "Ice Age", "ICE");
  }
}

module.exports = SoulKiss;
