"use strict";
const Constants = require ("../../../Constants");
const CopperTabletBase = require("../setCED/CopperTablet");

class CopperTablet extends CopperTabletBase {
  constructor(game) {
    super(game, "Copper Tablet", "Masters Edition", "MED");
  }
}

module.exports = CopperTablet;
