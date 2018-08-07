"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnowDevil extends UnimplementedCard {
  constructor (game) {
    super(game, "Snow Devil", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = SnowDevil;
