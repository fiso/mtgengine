"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Farseek extends UnimplementedCard {
  constructor (game) {
    super(game, "Farseek", "Commander 2017", "C17");
  }
}

module.exports = Farseek;
