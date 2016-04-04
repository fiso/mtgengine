"use strict";
const Constants = require ("../../../Constants");
const BarlsCageBase = require("../setCHR/BarlsCage");

class BarlsCage extends BarlsCageBase {
  constructor(game) {
    super(game, "Barl's Cage", "Fifth Edition", "5ED");
  }
}

module.exports = BarlsCage;
