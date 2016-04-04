"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TroubledHealer extends Card {
  constructor(game) {
    super(game, "Troubled Healer", "Prophecy", "PCY");
  }
}

module.exports = TroubledHealer;
