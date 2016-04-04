"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DowsingShaman extends UnimplementedCard {
  constructor(game) {
    super(game, "Dowsing Shaman", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = DowsingShaman;
