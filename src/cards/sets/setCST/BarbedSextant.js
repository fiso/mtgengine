"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BarbedSextant extends UnimplementedCard {
  constructor (game) {
    super(game, "Barbed Sextant", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = BarbedSextant;
