"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SkyDiamondBase = require("../set6ED/SkyDiamond.js");

class SkyDiamond extends SkyDiamondBase {
  constructor(game) {
    super(game, "Sky Diamond", "Seventh Edition", "7ED");
  }
}

module.exports = SkyDiamond;
