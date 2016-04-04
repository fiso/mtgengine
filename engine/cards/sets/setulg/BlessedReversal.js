"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BlessedReversalBase = require("../set8ED/BlessedReversal.js");

class BlessedReversal extends BlessedReversalBase {
  constructor(game) {
    super(game, "Blessed Reversal", "Urza's Legacy", "ULG");
  }
}

module.exports = BlessedReversal;
