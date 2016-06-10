"use strict";
const Constants = require ("../../../Constants");
const FerozsBanBase = require("../set5ED/FerozsBan");

class FerozsBan extends FerozsBanBase {
  constructor (game) {
    super(game, "Feroz's Ban", "Seventh Edition", "7ED");
  }
}

module.exports = FerozsBan;
