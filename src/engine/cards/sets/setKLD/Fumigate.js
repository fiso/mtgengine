"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Fumigate extends UnimplementedCard {
  constructor (game) {
    super(game, "Fumigate", "Kaladesh", "KLD");
  }
}

module.exports = Fumigate;
