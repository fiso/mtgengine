"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TroublesomeSpirit extends Card {
  constructor(game) {
    super(game, "Troublesome Spirit", "Prophecy", "PCY");
  }
}

module.exports = TroublesomeSpirit;
