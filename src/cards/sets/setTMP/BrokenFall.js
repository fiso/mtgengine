"use strict";
const Constants = require ("../../../Constants");
const BrokenFallBase = require("../setBRB/BrokenFall");

class BrokenFall extends BrokenFallBase {
  constructor (game) {
    super(game, "Broken Fall", "Tempest", "TMP");
  }
}

module.exports = BrokenFall;
