"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const WarmthBase = require("../set6ED/Warmth.js");

class Warmth extends WarmthBase {
  constructor(game) {
    super(game, "Warmth", "Tempest", "TMP");
  }
}

module.exports = Warmth;
