"use strict";
const Constants = require ("../../../Constants");
const SoltariMonkBase = require("../setTPR/SoltariMonk");

class SoltariMonk extends SoltariMonkBase {
  constructor (game) {
    super(game, "Soltari Monk", "Tempest", "TMP");
  }
}

module.exports = SoltariMonk;
