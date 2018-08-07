"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShelteringLight extends UnimplementedCard {
  constructor (game) {
    super(game, "Sheltering Light", "Ixalan", "XLN");
  }
}

module.exports = ShelteringLight;
