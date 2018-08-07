"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PleaforPower extends UnimplementedCard {
  constructor (game) {
    super(game, "Plea for Power", "Vintage Masters", "VMA");
  }
}

module.exports = PleaforPower;
