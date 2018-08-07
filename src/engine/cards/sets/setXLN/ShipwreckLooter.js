"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShipwreckLooter extends UnimplementedCard {
  constructor (game) {
    super(game, "Shipwreck Looter", "Ixalan", "XLN");
  }
}

module.exports = ShipwreckLooter;
