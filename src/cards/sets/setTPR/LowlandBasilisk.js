"use strict";
const Constants = require ("../../../Constants");
const LowlandBasiliskBase = require("../setSTH/LowlandBasilisk");

class LowlandBasilisk extends LowlandBasiliskBase {
  constructor (game) {
    super(game, "Lowland Basilisk", "Tempest Remastered", "TPR");
  }
}

module.exports = LowlandBasilisk;
