"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Voidwalk extends UnimplementedCard {
  constructor(game) {
    super(game, "Voidwalk", "Gatecrash", "GTC");
  }
}

module.exports = Voidwalk;
