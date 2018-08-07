"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraniteGargoyle extends UnimplementedCard {
  constructor (game) {
    super(game, "Granite Gargoyle", "Masters Edition", "MED");
  }
}

module.exports = GraniteGargoyle;
