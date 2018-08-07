"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CurioVendor extends UnimplementedCard {
  constructor (game) {
    super(game, "Curio Vendor", "Kaladesh", "KLD");
  }
}

module.exports = CurioVendor;
