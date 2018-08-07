"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ConcealedCourtyard extends UnimplementedCard {
  constructor (game) {
    super(game, "Concealed Courtyard", "Kaladesh", "KLD");
  }
}

module.exports = ConcealedCourtyard;
