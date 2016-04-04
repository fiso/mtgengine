"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofSeizing extends UnimplementedCard {
  constructor(game) {
    super(game, "Word of Seizing", "Commander 2014", "C14");
  }
}

module.exports = WordofSeizing;
