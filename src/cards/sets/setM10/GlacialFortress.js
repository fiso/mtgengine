"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GlacialFortress extends UnimplementedCard {
  constructor (game) {
    super(game, "Glacial Fortress", "Magic 2010", "M10");
  }
}

module.exports = GlacialFortress;
