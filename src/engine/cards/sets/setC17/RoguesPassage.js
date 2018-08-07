"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RoguesPassage extends UnimplementedCard {
  constructor (game) {
    super(game, "Rogue's Passage", "Commander 2017", "C17");
  }
}

module.exports = RoguesPassage;
