"use strict";
const Constants = require ("../../../Constants");
const ReversePolarityBase = require("../setSUM/ReversePolarity");

class ReversePolarity extends ReversePolarityBase {
  constructor (game) {
    super(game, "Reverse Polarity", "Antiquities", "ATQ");
  }
}

module.exports = ReversePolarity;
