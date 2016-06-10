"use strict";
const Constants = require ("../../../Constants");
const BarlsCageBase = require("../setCHR/BarlsCage");

class BarlsCage extends BarlsCageBase {
  constructor (game) {
    super(game, "Barl's Cage", "The Dark", "DRK");
  }
}

module.exports = BarlsCage;
