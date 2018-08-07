"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofUndoing extends UnimplementedCard {
  constructor (game) {
    super(game, "Word of Undoing", "Masters Edition", "MED");
  }
}

module.exports = WordofUndoing;
