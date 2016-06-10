"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoguesPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue's Passage", "Commander 2015", "C15");
  }
}

module.exports = RoguesPassage;
