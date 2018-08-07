"use strict";
const Constants = require ("../../../Constants");
const FerozsBanBase = require("../set7ED/FerozsBan");

class FerozsBan extends FerozsBanBase {
  constructor (game) {
    super(game, "Feroz's Ban", "Fifth Edition", "5ED");
  }
}

module.exports = FerozsBan;
