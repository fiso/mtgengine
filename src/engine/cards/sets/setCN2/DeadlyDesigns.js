"use strict";
const Constants = require ("../../../Constants");
const DeadlyDesignsBase = require("../setA25/DeadlyDesigns");

class DeadlyDesigns extends DeadlyDesignsBase {
  constructor (game) {
    super(game, "Deadly Designs", "Conspiracy: Take the Crown", "CN2");
  }
}

module.exports = DeadlyDesigns;
