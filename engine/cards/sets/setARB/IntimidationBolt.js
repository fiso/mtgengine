"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IntimidationBolt extends UnimplementedCard {
  constructor(game) {
    super(game, "Intimidation Bolt", "Alara Reborn", "ARB");
  }
}

module.exports = IntimidationBolt;
