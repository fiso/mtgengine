"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SharpenedPitchforkBase = require("../setDDQ/SharpenedPitchfork.js");

class SharpenedPitchfork extends SharpenedPitchforkBase {
  constructor(game) {
    super(game, "Sharpened Pitchfork", "Innistrad", "ISD");
  }
}

module.exports = SharpenedPitchfork;
