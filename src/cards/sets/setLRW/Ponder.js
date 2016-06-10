"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Ponder extends UnimplementedCard {
  constructor (game) {
    super(game, "Ponder", "Lorwyn", "LRW");
  }
}

module.exports = Ponder;
