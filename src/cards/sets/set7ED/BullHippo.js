"use strict";
const Constants = require ("../../../Constants");
const BullHippoBase = require("../setPOR/BullHippo");

class BullHippo extends BullHippoBase {
  constructor (game) {
    super(game, "Bull Hippo", "Seventh Edition", "7ED");
  }
}

module.exports = BullHippo;
