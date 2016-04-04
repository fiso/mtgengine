"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThrowingKnife extends UnimplementedCard {
  constructor(game) {
    super(game, "Throwing Knife", "Magic Origins", "ORI");
  }
}

module.exports = ThrowingKnife;
