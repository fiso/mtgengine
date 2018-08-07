"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReadtheRunes extends UnimplementedCard {
  constructor (game) {
    super(game, "Read the Runes", "Commander 2016", "C16");
  }
}

module.exports = ReadtheRunes;
