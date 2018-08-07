"use strict";
const Constants = require ("../../../Constants");
const PineBarrensBase = require("../setTPR/PineBarrens");

class PineBarrens extends PineBarrensBase {
  constructor (game) {
    super(game, "Pine Barrens", "Tempest", "TMP");
  }
}

module.exports = PineBarrens;
