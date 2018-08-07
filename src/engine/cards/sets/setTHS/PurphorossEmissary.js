"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PurphorossEmissary extends UnimplementedCard {
  constructor (game) {
    super(game, "Purphoros's Emissary", "Theros", "THS");
  }
}

module.exports = PurphorossEmissary;
