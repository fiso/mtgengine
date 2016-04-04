"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IntimidationBolt extends Card {
  constructor(game) {
    super(game, "Intimidation Bolt", "Alara Reborn", "ARB");
  }
}

module.exports = IntimidationBolt;
