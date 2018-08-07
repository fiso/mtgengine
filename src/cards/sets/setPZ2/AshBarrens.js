"use strict";
const Constants = require ("../../../Constants");
const AshBarrensBase = require("../setCM2/AshBarrens");

class AshBarrens extends AshBarrensBase {
  constructor (game) {
    super(game, "Ash Barrens", "You Make the Cube", "PZ2");
  }
}

module.exports = AshBarrens;
