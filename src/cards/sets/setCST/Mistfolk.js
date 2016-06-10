"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Mistfolk extends UnimplementedCard {
  constructor (game) {
    super(game, "Mistfolk", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Mistfolk;
