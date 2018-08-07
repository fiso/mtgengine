"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DancewithDevils extends UnimplementedCard {
  constructor (game) {
    super(game, "Dance with Devils", "Shadows over Innistrad", "SOI");
  }
}

module.exports = DancewithDevils;
