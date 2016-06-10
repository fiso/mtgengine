"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PorcelainLegionnaire extends UnimplementedCard {
  constructor (game) {
    super(game, "Porcelain Legionnaire", "New Phyrexia", "NPH");
  }
}

module.exports = PorcelainLegionnaire;
