"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraniteGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Granite Gargoyle", "Collector's Edition", "CED");
  }
}

module.exports = GraniteGargoyle;
