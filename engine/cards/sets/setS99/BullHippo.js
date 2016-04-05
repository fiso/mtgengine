"use strict";
const Constants = require ("../../../Constants");
const BullHippoBase = require("../setPOR/BullHippo");

class BullHippo extends BullHippoBase {
  constructor(game) {
    super(game, "Bull Hippo", "Starter 1999", "S99");
  }
}

module.exports = BullHippo;
