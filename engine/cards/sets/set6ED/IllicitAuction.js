"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IllicitAuction extends UnimplementedCard {
  constructor(game) {
    super(game, "Illicit Auction", "Classic Sixth Edition", "6ED");
  }
}

module.exports = IllicitAuction;
