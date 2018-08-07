"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarkNourishment extends UnimplementedCard {
  constructor (game) {
    super(game, "Dark Nourishment", "Ixalan", "XLN");
  }
}

module.exports = DarkNourishment;
