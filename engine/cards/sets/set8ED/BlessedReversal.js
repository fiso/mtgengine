"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class BlessedReversal extends Card {
  constructor(game) {
    super(game, "Blessed Reversal", "Eighth Edition", "8ED");
  }
}

module.exports = BlessedReversal;
