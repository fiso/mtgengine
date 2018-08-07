"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MakeObsolete extends UnimplementedCard {
  constructor (game) {
    super(game, "Make Obsolete", "Kaladesh", "KLD");
  }
}

module.exports = MakeObsolete;
