"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class IsaoEnlightenedBushi extends UnimplementedCard {
  constructor (game) {
    super(game, "Isao, Enlightened Bushi", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = IsaoEnlightenedBushi;
