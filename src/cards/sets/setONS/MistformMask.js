"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MistformMask extends UnimplementedCard {
  constructor(game) {
    super(game, "Mistform Mask", "Onslaught", "ONS");
  }
}

module.exports = MistformMask;
