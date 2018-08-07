"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AngelAngel extends UnimplementedCard {
  constructor (game) {
    super(game, "Angel // Angel", "Unstable Tokens", "TUST");
  }
}

module.exports = AngelAngel;
