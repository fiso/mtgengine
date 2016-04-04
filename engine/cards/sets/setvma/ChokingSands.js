"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ChokingSandsBase = require("../setMIR/ChokingSands.js");

class ChokingSands extends ChokingSandsBase {
  constructor(game) {
    super(game, "Choking Sands", "Vintage Masters", "VMA");
  }
}

module.exports = ChokingSands;
