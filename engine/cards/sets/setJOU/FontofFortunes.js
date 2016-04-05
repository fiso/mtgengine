"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FontofFortunes extends UnimplementedCard {
  constructor(game) {
    super(game, "Font of Fortunes", "Journey into Nyx", "JOU");
  }
}

module.exports = FontofFortunes;
