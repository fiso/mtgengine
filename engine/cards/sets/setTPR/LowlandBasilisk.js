"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LowlandBasiliskBase = require("../setSTH/LowlandBasilisk.js");

class LowlandBasilisk extends LowlandBasiliskBase {
  constructor(game) {
    super(game, "Lowland Basilisk", "Tempest Remastered", "TPR");
  }
}

module.exports = LowlandBasilisk;
