"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WordofUndoing extends UnimplementedCard {
  constructor (game) {
    super(game, "Word of Undoing", "Ice Age", "ICE");
  }
}

module.exports = WordofUndoing;
