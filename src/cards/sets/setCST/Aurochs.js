"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Aurochs extends UnimplementedCard {
  constructor(game) {
    super(game, "Aurochs", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = Aurochs;
