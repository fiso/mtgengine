"use strict";
const Constants = require ("../../../Constants");
const CopperTabletBase = require("../setCED/CopperTablet");

class CopperTablet extends CopperTabletBase {
  constructor(game) {
    super(game, "Copper Tablet", "Unlimited Edition", "2ED");
  }
}

module.exports = CopperTablet;
