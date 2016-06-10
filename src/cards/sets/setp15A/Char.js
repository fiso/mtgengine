"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Char extends UnimplementedCard {
  constructor (game) {
    super(game, "Char", "15th Anniversary", "p15A");
  }
}

module.exports = Char;
