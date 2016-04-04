"use strict";
const Constants = require ("../../../Constants");
const SharpenedPitchforkBase = require("../setDDQ/SharpenedPitchfork");

class SharpenedPitchfork extends SharpenedPitchforkBase {
  constructor(game) {
    super(game, "Sharpened Pitchfork", "Innistrad", "ISD");
  }
}

module.exports = SharpenedPitchfork;
