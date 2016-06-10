"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class NornsDominion extends UnimplementedCard {
  constructor (game) {
    super(game, "Norn's Dominion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = NornsDominion;
