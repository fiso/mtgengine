"use strict";
const Constants = require ("../../../Constants");
const FerozsBanBase = require("../set5ED/FerozsBan");

class FerozsBan extends FerozsBanBase {
  constructor (game) {
    super(game, "Feroz's Ban", "Homelands", "HML");
  }
}

module.exports = FerozsBan;
