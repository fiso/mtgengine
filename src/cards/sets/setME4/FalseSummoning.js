"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseSummoning extends UnimplementedCard {
  constructor (game) {
    super(game, "False Summoning", "Masters Edition IV", "ME4");
  }
}

module.exports = FalseSummoning;
