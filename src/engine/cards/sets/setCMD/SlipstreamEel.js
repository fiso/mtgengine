"use strict";
const Constants = require ("../../../Constants");
const SlipstreamEelBase = require("../setCM2/SlipstreamEel");

class SlipstreamEel extends SlipstreamEelBase {
  constructor (game) {
    super(game, "Slipstream Eel", "Commander 2011", "CMD");
  }
}

module.exports = SlipstreamEel;
