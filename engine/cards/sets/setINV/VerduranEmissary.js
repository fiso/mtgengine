"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const VerduranEmissaryBase = require("../setDDE/VerduranEmissary.js");

class VerduranEmissary extends VerduranEmissaryBase {
  constructor(game) {
    super(game, "Verduran Emissary", "Invasion", "INV");
  }
}

module.exports = VerduranEmissary;
