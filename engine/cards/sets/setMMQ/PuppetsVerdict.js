"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PuppetsVerdict extends UnimplementedCard {
  constructor(game) {
    super(game, "Puppet's Verdict", "Mercadian Masques", "MMQ");
  }
}

module.exports = PuppetsVerdict;
