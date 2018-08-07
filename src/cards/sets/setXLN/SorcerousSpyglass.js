"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SorcerousSpyglass extends UnimplementedCard {
  constructor (game) {
    super(game, "Sorcerous Spyglass", "Ixalan", "XLN");
  }
}

module.exports = SorcerousSpyglass;
