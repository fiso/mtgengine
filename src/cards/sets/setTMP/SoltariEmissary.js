"use strict";
const Constants = require ("../../../Constants");
const SoltariEmissaryBase = require("../setVMA/SoltariEmissary");

class SoltariEmissary extends SoltariEmissaryBase {
  constructor (game) {
    super(game, "Soltari Emissary", "Tempest", "TMP");
  }
}

module.exports = SoltariEmissary;
