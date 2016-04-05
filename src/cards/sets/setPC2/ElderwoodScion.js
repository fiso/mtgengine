"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElderwoodScion extends UnimplementedCard {
  constructor(game) {
    super(game, "Elderwood Scion", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = ElderwoodScion;
