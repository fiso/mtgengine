"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Cleric extends UnimplementedCard {
  constructor (game) {
    super(game, "Cleric", "Dominaria Tokens", "TDOM");
  }
}

module.exports = Cleric;
