"use strict";
const Constants = require ("../../../Constants");
const BenevolentBodyguardBase = require("../setEMA/BenevolentBodyguard");

class BenevolentBodyguard extends BenevolentBodyguardBase {
  constructor (game) {
    super(game, "Benevolent Bodyguard", "Vintage Masters", "VMA");
  }
}

module.exports = BenevolentBodyguard;
