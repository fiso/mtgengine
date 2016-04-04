"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcumsWeathervane extends Card {
  constructor(game) {
    super(game, "Arcum's Weathervane", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = ArcumsWeathervane;
