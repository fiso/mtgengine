"use strict";
const Constants = require ("../../../Constants");
const SlipstreamEelBase = require("../setCMD/SlipstreamEel");

class SlipstreamEel extends SlipstreamEelBase {
  constructor(game) {
    super(game, "Slipstream Eel", "Onslaught", "ONS");
  }
}

module.exports = SlipstreamEel;
