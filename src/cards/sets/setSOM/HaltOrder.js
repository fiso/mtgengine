"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HaltOrder extends UnimplementedCard {
  constructor(game) {
    super(game, "Halt Order", "Scars of Mirrodin", "SOM");
  }
}

module.exports = HaltOrder;
