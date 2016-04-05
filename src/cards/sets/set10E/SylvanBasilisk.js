"use strict";
const Constants = require ("../../../Constants");
const SylvanBasiliskBase = require("../setPO2/SylvanBasilisk");

class SylvanBasilisk extends SylvanBasiliskBase {
  constructor(game) {
    super(game, "Sylvan Basilisk", "Tenth Edition", "10E");
  }
}

module.exports = SylvanBasilisk;
