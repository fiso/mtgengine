"use strict";
const Constants = require ("../../../Constants");
const PineBarrensBase = require("../setTPR/PineBarrens");

class PineBarrens extends PineBarrensBase {
  constructor (game) {
    super(game, "Pine Barrens", "Vintage Masters", "VMA");
  }
}

module.exports = PineBarrens;
