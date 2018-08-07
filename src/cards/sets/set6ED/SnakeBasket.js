"use strict";
const Constants = require ("../../../Constants");
const SnakeBasketBase = require("../setWC00/SnakeBasket");

class SnakeBasket extends SnakeBasketBase {
  constructor (game) {
    super(game, "Snake Basket", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SnakeBasket;
