"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SoulcageFiend extends Card {
  constructor(game) {
    super(game, "Soulcage Fiend", "Avacyn Restored", "AVR");
  }
}

module.exports = SoulcageFiend;
