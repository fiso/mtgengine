"use strict";
const Constants = require ("../../../Constants");
const BarlsCageBase = require("../setCHR/BarlsCage");

class BarlsCage extends BarlsCageBase {
  constructor(game) {
    super(game, "Barl's Cage", "Masters Edition III", "ME3");
  }
}

module.exports = BarlsCage;
