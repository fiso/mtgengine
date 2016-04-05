"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DefenderoftheOrder extends UnimplementedCard {
  constructor(game) {
    super(game, "Defender of the Order", "Legions", "LGN");
  }
}

module.exports = DefenderoftheOrder;
