"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialFortress extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Fortress", "Ixalan", "XLN");
  }
}

module.exports = GlacialFortress;
