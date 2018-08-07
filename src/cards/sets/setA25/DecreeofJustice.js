"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DecreeofJustice extends UnimplementedCard {
  constructor (game) {
    super(game, "Decree of Justice", "Masters 25", "A25");
  }
}

module.exports = DecreeofJustice;
