"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Thoughtseize extends UnimplementedCard {
  constructor (game) {
    super(game, "Thoughtseize", "Lorwyn", "LRW");
  }
}

module.exports = Thoughtseize;
