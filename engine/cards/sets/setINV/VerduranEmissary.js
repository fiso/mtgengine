"use strict";
const Constants = require ("../../../Constants");
const VerduranEmissaryBase = require("../setDDE/VerduranEmissary");

class VerduranEmissary extends VerduranEmissaryBase {
  constructor(game) {
    super(game, "Verduran Emissary", "Invasion", "INV");
  }
}

module.exports = VerduranEmissary;
