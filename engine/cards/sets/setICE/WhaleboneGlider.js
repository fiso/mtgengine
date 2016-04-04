"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WhaleboneGliderBase = require("../setCST/WhaleboneGlider.js");

class WhaleboneGlider extends WhaleboneGliderBase {
  constructor(game) {
    super(game, "Whalebone Glider", "Ice Age", "ICE");
  }
}

module.exports = WhaleboneGlider;
