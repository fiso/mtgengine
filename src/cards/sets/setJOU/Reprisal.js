"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Reprisal extends UnimplementedCard {
  constructor (game) {
    super(game, "Reprisal", "Journey into Nyx", "JOU");
  }
}

module.exports = Reprisal;
