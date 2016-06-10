"use strict";
const Constants = require ("../../../Constants");
const SylvanBasiliskBase = require("../setPO2/SylvanBasilisk");

class SylvanBasilisk extends SylvanBasiliskBase {
  constructor (game) {
    super(game, "Sylvan Basilisk", "Starter 1999", "S99");
  }
}

module.exports = SylvanBasilisk;
