"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FreewindFalcon extends UnimplementedCard {
  constructor (game) {
    super(game, "Freewind Falcon", "Anthologies", "ATH");
  }
}

module.exports = FreewindFalcon;
