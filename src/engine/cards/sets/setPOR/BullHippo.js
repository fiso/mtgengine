"use strict";
const Constants = require ("../../../Constants");
const BullHippoBase = require("../set7ED/BullHippo");

class BullHippo extends BullHippoBase {
  constructor (game) {
    super(game, "Bull Hippo", "Portal", "POR");
  }
}

module.exports = BullHippo;
