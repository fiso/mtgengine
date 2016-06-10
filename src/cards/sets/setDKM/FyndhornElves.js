"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FyndhornElves extends UnimplementedCard {
  constructor (game) {
    super(game, "Fyndhorn Elves", "Deckmasters", "DKM");
  }
}

module.exports = FyndhornElves;
