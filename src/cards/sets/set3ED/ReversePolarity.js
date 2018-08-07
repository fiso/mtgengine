"use strict";
const Constants = require ("../../../Constants");
const ReversePolarityBase = require("../setSUM/ReversePolarity");

class ReversePolarity extends ReversePolarityBase {
  constructor (game) {
    super(game, "Reverse Polarity", "Revised Edition", "3ED");
  }
}

module.exports = ReversePolarity;
