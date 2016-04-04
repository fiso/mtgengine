"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnakeBasket extends Card {
  constructor(game) {
    super(game, "Snake Basket", "Classic Sixth Edition", "6ED");
  }
}

module.exports = SnakeBasket;
