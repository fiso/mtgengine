"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NaturesWill extends Card {
  constructor(game) {
    super(game, "Nature's Will", "Champions of Kamigawa", "CHK");
  }
}

module.exports = NaturesWill;
