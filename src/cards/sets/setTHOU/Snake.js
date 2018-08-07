"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Snake extends UnimplementedCard {
  constructor (game) {
    super(game, "Snake", "Hour of Devastation Tokens", "THOU");
  }
}

module.exports = Snake;
