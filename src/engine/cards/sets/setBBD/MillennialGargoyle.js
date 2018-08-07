"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MillennialGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Millennial Gargoyle", "Battlebond", "BBD");
  }
}

module.exports = MillennialGargoyle;
