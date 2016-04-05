"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FalseDefeat extends UnimplementedCard {
  constructor(game) {
    super(game, "False Defeat", "Masters Edition III", "ME3");
  }
}

module.exports = FalseDefeat;
