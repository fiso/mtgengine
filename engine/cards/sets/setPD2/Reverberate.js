"use strict";
const Constants = require ("../../../Constants");
const ReverberateBase = require("../setM11/Reverberate");

class Reverberate extends ReverberateBase {
  constructor(game) {
    super(game, "Reverberate", "Premium Deck Series: Fire and Lightning", "PD2");
  }
}

module.exports = Reverberate;
