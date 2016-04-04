"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DeadwoodTreefolkBase = require("../setC13/DeadwoodTreefolk.js");

class DeadwoodTreefolk extends DeadwoodTreefolkBase {
  constructor(game) {
    super(game, "Deadwood Treefolk", "Planar Chaos", "PLC");
  }
}

module.exports = DeadwoodTreefolk;
