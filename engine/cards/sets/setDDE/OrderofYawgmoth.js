"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class OrderofYawgmoth extends UnimplementedCard {
  constructor(game) {
    super(game, "Order of Yawgmoth", "Duel Decks: Phyrexia vs. the Coalition", "DDE");
  }
}

module.exports = OrderofYawgmoth;
