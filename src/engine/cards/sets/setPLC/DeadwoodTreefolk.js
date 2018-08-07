"use strict";
const Constants = require ("../../../Constants");
const DeadwoodTreefolkBase = require("../setC13/DeadwoodTreefolk");

class DeadwoodTreefolk extends DeadwoodTreefolkBase {
  constructor (game) {
    super(game, "Deadwood Treefolk", "Planar Chaos", "PLC");
  }
}

module.exports = DeadwoodTreefolk;
