"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const LorescaleCoatlBase = require("../setARB/LorescaleCoatl.js");

class LorescaleCoatl extends LorescaleCoatlBase {
  constructor(game) {
    super(game, "Lorescale Coatl", "Commander 2015", "C15");
  }
}

module.exports = LorescaleCoatl;
