"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArcumsWeathervane extends UnimplementedCard {
  constructor (game) {
    super(game, "Arcum's Weathervane", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = ArcumsWeathervane;
