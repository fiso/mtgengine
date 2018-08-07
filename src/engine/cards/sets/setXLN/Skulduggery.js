"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Skulduggery extends UnimplementedCard {
  constructor (game) {
    super(game, "Skulduggery", "Ixalan", "XLN");
  }
}

module.exports = Skulduggery;
