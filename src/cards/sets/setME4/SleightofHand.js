"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SleightofHand extends UnimplementedCard {
  constructor(game) {
    super(game, "Sleight of Hand", "Masters Edition IV", "ME4");
  }
}

module.exports = SleightofHand;
