"use strict";
const Constants = require ("../../../Constants");
const SoltariMonkBase = require("../setTMP/SoltariMonk");

class SoltariMonk extends SoltariMonkBase {
  constructor(game) {
    super(game, "Soltari Monk", "Tempest Remastered", "TPR");
  }
}

module.exports = SoltariMonk;
