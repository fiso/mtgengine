"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Harpy extends UnimplementedCard {
  constructor (game) {
    super(game, "Harpy", "Theros Tokens", "TTHS");
  }
}

module.exports = Harpy;
