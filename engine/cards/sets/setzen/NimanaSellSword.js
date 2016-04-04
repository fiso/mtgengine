"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class NimanaSellSword extends Card {
  constructor(game) {
    super(game, "Nimana Sell-Sword", "Zendikar", "ZEN");
  }
}

module.exports = NimanaSellSword;
