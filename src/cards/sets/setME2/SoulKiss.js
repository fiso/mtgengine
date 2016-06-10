"use strict";
const Constants = require ("../../../Constants");
const SoulKissBase = require("../setICE/SoulKiss");

class SoulKiss extends SoulKissBase {
  constructor (game) {
    super(game, "Soul Kiss", "Masters Edition II", "ME2");
  }
}

module.exports = SoulKiss;
