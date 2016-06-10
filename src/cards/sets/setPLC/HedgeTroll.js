"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HedgeTroll extends UnimplementedCard {
  constructor (game) {
    super(game, "Hedge Troll", "Planar Chaos", "PLC");
  }
}

module.exports = HedgeTroll;
