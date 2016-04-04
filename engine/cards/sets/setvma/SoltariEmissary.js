"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SoltariEmissaryBase = require("../setTMP/SoltariEmissary.js");

class SoltariEmissary extends SoltariEmissaryBase {
  constructor(game) {
    super(game, "Soltari Emissary", "Vintage Masters", "VMA");
  }
}

module.exports = SoltariEmissary;
