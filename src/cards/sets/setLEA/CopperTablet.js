"use strict";
const Constants = require ("../../../Constants");
const CopperTabletBase = require("../setMED/CopperTablet");

class CopperTablet extends CopperTabletBase {
  constructor (game) {
    super(game, "Copper Tablet", "Limited Edition Alpha", "LEA");
  }
}

module.exports = CopperTablet;
