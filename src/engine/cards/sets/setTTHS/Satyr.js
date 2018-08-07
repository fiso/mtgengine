"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Satyr extends UnimplementedCard {
  constructor (game) {
    super(game, "Satyr", "Theros Tokens", "TTHS");
  }
}

module.exports = Satyr;
