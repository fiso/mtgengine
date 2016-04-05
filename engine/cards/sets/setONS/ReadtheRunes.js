"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ReadtheRunes extends UnimplementedCard {
  constructor(game) {
    super(game, "Read the Runes", "Onslaught", "ONS");
  }
}

module.exports = ReadtheRunes;
