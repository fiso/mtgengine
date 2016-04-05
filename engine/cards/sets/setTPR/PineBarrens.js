"use strict";
const Constants = require ("../../../Constants");
const PineBarrensBase = require("../setTMP/PineBarrens");

class PineBarrens extends PineBarrensBase {
  constructor(game) {
    super(game, "Pine Barrens", "Tempest Remastered", "TPR");
  }
}

module.exports = PineBarrens;
