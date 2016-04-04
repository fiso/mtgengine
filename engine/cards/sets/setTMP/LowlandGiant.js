"use strict";
const Constants = require ("../../../Constants");
const LowlandGiantBase = require("../setBTD/LowlandGiant");

class LowlandGiant extends LowlandGiantBase {
  constructor(game) {
    super(game, "Lowland Giant", "Tempest", "TMP");
  }
}

module.exports = LowlandGiant;
