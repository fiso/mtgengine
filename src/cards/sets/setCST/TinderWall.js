"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TinderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Tinder Wall", "Coldsnap Theme Decks", "CST");
  }
}

module.exports = TinderWall;
