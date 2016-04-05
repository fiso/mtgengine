"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TricksoftheTrade extends UnimplementedCard {
  constructor(game) {
    super(game, "Tricks of the Trade", "Magic 2013", "M13");
  }
}

module.exports = TricksoftheTrade;
