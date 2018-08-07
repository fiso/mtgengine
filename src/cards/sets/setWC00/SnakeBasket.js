"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnakeBasket extends UnimplementedCard {
  constructor (game) {
    super(game, "Snake Basket", "World Championship Decks 2000", "WC00");
  }
}

module.exports = SnakeBasket;
