"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyDiamondBase = require("../set6ED/SkyDiamond.js");

class SkyDiamond extends SkyDiamondBase {
  constructor(game) {
    super(game, "Sky Diamond", "Mirage", "MIR");
  }
}

module.exports = SkyDiamond;
