"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MoxDiamondBase = require("../setV10/MoxDiamond.js");

class MoxDiamond extends MoxDiamondBase {
  constructor(game) {
    super(game, "Mox Diamond", "Tempest Remastered", "TPR");
  }
}

module.exports = MoxDiamond;
