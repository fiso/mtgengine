"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BywayCourier extends UnimplementedCard {
  constructor (game) {
    super(game, "Byway Courier", "Shadows over Innistrad", "SOI");
  }
}

module.exports = BywayCourier;
