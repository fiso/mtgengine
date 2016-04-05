"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornBow extends UnimplementedCard {
  constructor(game) {
    super(game, "Fyndhorn Bow", "Ice Age", "ICE");
  }
}

module.exports = FyndhornBow;
