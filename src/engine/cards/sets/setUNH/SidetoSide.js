"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SidetoSide extends UnimplementedCard {
  constructor (game) {
    super(game, "Side to Side", "Unhinged", "UNH");
  }
}

module.exports = SidetoSide;
