"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const GoldenglowMothBase = require("../setM11/GoldenglowMoth.js");

class GoldenglowMoth extends GoldenglowMothBase {
  constructor(game) {
    super(game, "Goldenglow Moth", "Shadowmoor", "SHM");
  }
}

module.exports = GoldenglowMoth;
