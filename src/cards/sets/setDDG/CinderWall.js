"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CinderWall extends UnimplementedCard {
  constructor (game) {
    super(game, "Cinder Wall", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = CinderWall;
