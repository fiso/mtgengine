"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PaperTiger extends UnimplementedCard {
  constructor (game) {
    super(game, "Paper Tiger", "Unglued", "UGL");
  }
}

module.exports = PaperTiger;
