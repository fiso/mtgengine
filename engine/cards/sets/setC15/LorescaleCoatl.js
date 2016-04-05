"use strict";
const Constants = require ("../../../Constants");
const LorescaleCoatlBase = require("../setARB/LorescaleCoatl");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor(game) {
    super(game, "Lorescale Coatl", "Commander 2015", "C15");
  }
}

module.exports = LorescaleCoatl;
