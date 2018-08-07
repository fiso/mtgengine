"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnbenderTine extends UnimplementedCard {
  constructor (game) {
    super(game, "Unbender Tine", "Archenemy", "ARC");
  }
}

module.exports = UnbenderTine;
