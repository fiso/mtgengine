"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThievesAuction extends UnimplementedCard {
  constructor(game) {
    super(game, "Thieves' Auction", "Eighth Edition", "8ED");
  }
}

module.exports = ThievesAuction;
