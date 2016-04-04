"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const FerozsBanBase = require("../set5ED/FerozsBan.js");

class FerozsBan extends FerozsBanBase {
  constructor(game) {
    super(game, "Feroz's Ban", "Seventh Edition", "7ED");
  }
}

module.exports = FerozsBan;
