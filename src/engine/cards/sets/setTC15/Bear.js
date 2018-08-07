"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bear extends UnimplementedCard {
  constructor (game) {
    super(game, "Bear", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Bear;
