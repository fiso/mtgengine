"use strict";
const Constants = require ("../../../Constants");
const BullHippoBase = require("../setPOR/BullHippo");

class BullHippo extends BullHippoBase {
  constructor (game) {
    super(game, "Bull Hippo", "Portal Demo Game", "pPOD");
  }
}

module.exports = BullHippo;
