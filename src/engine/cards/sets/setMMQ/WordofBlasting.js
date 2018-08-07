"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofBlasting extends UnimplementedCard {
  constructor (game) {
    super(game, "Word of Blasting", "Mercadian Masques", "MMQ");
  }
}

module.exports = WordofBlasting;
