"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RuthlessKnave extends UnimplementedCard {
  constructor (game) {
    super(game, "Ruthless Knave", "Ixalan", "XLN");
  }
}

module.exports = RuthlessKnave;
