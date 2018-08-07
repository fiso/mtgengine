"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snakeform extends UnimplementedCard {
  constructor (game) {
    super(game, "Snakeform", "Commander 2015", "C15");
  }
}

module.exports = Snakeform;
