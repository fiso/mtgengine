"use strict";
const Constants = require ("../../../Constants");
const SnakeBasketBase = require("../setWC00/SnakeBasket");

class SnakeBasket extends SnakeBasketBase {
  constructor (game) {
    super(game, "Snake Basket", "Visions", "VIS");
  }
}

module.exports = SnakeBasket;
