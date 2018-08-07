"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FortuitousFind extends UnimplementedCard {
  constructor (game) {
    super(game, "Fortuitous Find", "Kaladesh", "KLD");
  }
}

module.exports = FortuitousFind;
