"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SquelchingLeeches extends UnimplementedCard {
  constructor (game) {
    super(game, "Squelching Leeches", "Journey into Nyx", "JOU");
  }
}

module.exports = SquelchingLeeches;
