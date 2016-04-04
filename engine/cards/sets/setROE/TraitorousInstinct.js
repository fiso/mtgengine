"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TraitorousInstinctBase = require("../setRTR/TraitorousInstinct.js");

class TraitorousInstinct extends TraitorousInstinctBase {
  constructor(game) {
    super(game, "Traitorous Instinct", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = TraitorousInstinct;
