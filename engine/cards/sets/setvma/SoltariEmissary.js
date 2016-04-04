"use strict";
const Constants = require ("../../../Constants");
const SoltariEmissaryBase = require("../setTMP/SoltariEmissary");

class SoltariEmissary extends SoltariEmissaryBase {
  constructor(game) {
    super(game, "Soltari Emissary", "Vintage Masters", "VMA");
  }
}

module.exports = SoltariEmissary;
