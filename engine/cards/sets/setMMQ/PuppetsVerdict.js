"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PuppetsVerdict extends Card {
  constructor(game) {
    super(game, "Puppet's Verdict", "Mercadian Masques", "MMQ");
  }
}

module.exports = PuppetsVerdict;
