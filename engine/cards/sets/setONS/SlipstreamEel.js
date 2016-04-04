"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SlipstreamEelBase = require("../setCMD/SlipstreamEel.js");

class SlipstreamEel extends SlipstreamEelBase {
  constructor(game) {
    super(game, "Slipstream Eel", "Onslaught", "ONS");
  }
}

module.exports = SlipstreamEel;
