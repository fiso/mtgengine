"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VentSentinel extends UnimplementedCard {
  constructor (game) {
    super(game, "Vent Sentinel", "Iconic Masters", "IMA");
  }
}

module.exports = VentSentinel;
