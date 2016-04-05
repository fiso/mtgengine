"use strict";
const Constants = require ("../../../Constants");
const GoldenglowMothBase = require("../setM11/GoldenglowMoth");

class GoldenglowMoth extends GoldenglowMothBase {
  constructor(game) {
    super(game, "Goldenglow Moth", "Shadowmoor", "SHM");
  }
}

module.exports = GoldenglowMoth;
