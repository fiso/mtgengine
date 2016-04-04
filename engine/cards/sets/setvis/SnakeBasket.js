"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SnakeBasketBase = require("../set6ED/SnakeBasket.js");

class SnakeBasket extends SnakeBasketBase {
  constructor(game) {
    super(game, "Snake Basket", "Visions", "VIS");
  }
}

module.exports = SnakeBasket;
