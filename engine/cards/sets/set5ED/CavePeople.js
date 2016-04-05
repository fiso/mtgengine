"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CavePeople extends UnimplementedCard {
  constructor(game) {
    super(game, "Cave People", "Fifth Edition", "5ED");
  }
}

module.exports = CavePeople;
