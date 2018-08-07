"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofSeizing extends UnimplementedCard {
  constructor (game) {
    super(game, "Word of Seizing", "Commander Anthology Volume II", "CM2");
  }
}

module.exports = WordofSeizing;
