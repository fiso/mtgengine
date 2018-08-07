"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornElves extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Elves", "Vintage Masters", "VMA");
  }
}

module.exports = FyndhornElves;
