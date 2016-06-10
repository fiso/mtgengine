"use strict";
const Constants = require ("../../../Constants");
const WhaleboneGliderBase = require("../setCST/WhaleboneGlider");

class WhaleboneGlider extends WhaleboneGliderBase {
  constructor (game) {
    super(game, "Whalebone Glider", "Ice Age", "ICE");
  }
}

module.exports = WhaleboneGlider;
