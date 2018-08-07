"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Demon extends UnimplementedCard {
  constructor (game) {
    super(game, "Demon", "Dominaria Tokens", "TDOM");
  }
}

module.exports = Demon;
