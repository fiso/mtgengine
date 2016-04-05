"use strict";
const Constants = require ("../../../Constants");
const LorescaleCoatlBase = require("../setARB/LorescaleCoatl");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor(game) {
    super(game, "Lorescale Coatl", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = LorescaleCoatl;
