"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnakeBasket extends UnimplementedCard {
  constructor (game) {
    super(game, "Snake Basket", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SnakeBasket;
