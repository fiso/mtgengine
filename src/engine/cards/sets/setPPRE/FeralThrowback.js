"use strict";
const Constants = require ("../../../Constants");
const FeralThrowbackBase = require("../setLGN/FeralThrowback");

class FeralThrowback extends FeralThrowbackBase {
  constructor (game) {
    super(game, "Feral Throwback", "Prerelease Events", "PPRE");
  }
}

module.exports = FeralThrowback;
