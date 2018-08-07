"use strict";
const Constants = require ("../../../Constants");
const LowlandGiantBase = require("../setTPR/LowlandGiant");

class LowlandGiant extends LowlandGiantBase {
  constructor (game) {
    super(game, "Lowland Giant", "Beatdown Box Set", "BTD");
  }
}

module.exports = LowlandGiant;
