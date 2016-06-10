"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AvengingArrow extends UnimplementedCard {
  constructor (game) {
    super(game, "Avenging Arrow", "Return to Ravnica", "RTR");
  }
}

module.exports = AvengingArrow;
