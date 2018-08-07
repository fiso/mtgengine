"use strict";
const Constants = require ("../../../Constants");
const AshBarrensBase = require("../setCM2/AshBarrens");

class AshBarrens extends AshBarrensBase {
  constructor (game) {
    super(game, "Ash Barrens", "Masters 25", "A25");
  }
}

module.exports = AshBarrens;
