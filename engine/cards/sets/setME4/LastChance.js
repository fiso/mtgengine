"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LastChance extends UnimplementedCard {
  constructor(game) {
    super(game, "Last Chance", "Masters Edition IV", "ME4");
  }
}

module.exports = LastChance;
