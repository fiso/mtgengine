"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntingWilds extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunting Wilds", "Planar Chaos", "PLC");
  }
}

module.exports = HuntingWilds;
