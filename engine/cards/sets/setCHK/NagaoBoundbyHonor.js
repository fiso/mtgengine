"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NagaoBoundbyHonor extends Card {
  constructor(game) {
    super(game, "Nagao, Bound by Honor", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NagaoBoundbyHonor;
