"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SavageConception extends UnimplementedCard {
  constructor(game) {
    super(game, "Savage Conception", "Eventide", "EVE");
  }
}

module.exports = SavageConception;
