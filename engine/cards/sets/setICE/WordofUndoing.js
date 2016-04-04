"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WordofUndoing extends Card {
  constructor(game) {
    super(game, "Word of Undoing", "Ice Age", "ICE");
  }
}

module.exports = WordofUndoing;
