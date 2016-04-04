"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FanaticalFever extends Card {
  constructor(game) {
    super(game, "Fanatical Fever", "Ice Age", "ICE");
  }
}

module.exports = FanaticalFever;
