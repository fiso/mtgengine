"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArmsDealer extends UnimplementedCard {
  constructor(game) {
    super(game, "Arms Dealer", "Magic 2013", "M13");
  }
}

module.exports = ArmsDealer;
