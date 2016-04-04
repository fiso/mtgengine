"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BenevolentBodyguardBase = require("../setJUD/BenevolentBodyguard.js");

class BenevolentBodyguard extends BenevolentBodyguardBase {
  constructor(game) {
    super(game, "Benevolent Bodyguard", "Vintage Masters", "VMA");
  }
}

module.exports = BenevolentBodyguard;
