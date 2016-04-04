"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const BeastofBurdenBase = require("../set8ED/BeastofBurden.js");

class BeastofBurden extends BeastofBurdenBase {
  constructor(game) {
    super(game, "Beast of Burden", "Ninth Edition", "9ED");
  }
}

module.exports = BeastofBurden;
