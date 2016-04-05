"use strict";
const Constants = require ("../../../Constants");
const BullHippoBase = require("../setPOR/BullHippo");

class BullHippo extends BullHippoBase {
  constructor(game) {
    super(game, "Bull Hippo", "Urza's Saga", "USG");
  }
}

module.exports = BullHippo;
