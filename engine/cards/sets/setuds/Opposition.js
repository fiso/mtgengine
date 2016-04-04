"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const OppositionBase = require("../set7ED/Opposition.js");

class Opposition extends OppositionBase {
  constructor(game) {
    super(game, "Opposition", "Urza's Destiny", "UDS");
  }
}

module.exports = Opposition;
