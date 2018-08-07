"use strict";
const Constants = require ("../../../Constants");
const SlipstreamEelBase = require("../setCM2/SlipstreamEel");

class SlipstreamEel extends SlipstreamEelBase {
  constructor (game) {
    super(game, "Slipstream Eel", "Onslaught", "ONS");
  }
}

module.exports = SlipstreamEel;
